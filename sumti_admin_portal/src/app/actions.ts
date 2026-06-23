'use server'

import { supabaseServer } from '@/lib/supabase-server'
import { revalidatePath } from 'next/cache'

export async function deleteProduct(id: string, image_url: string) {
  try {
    // Extract file path from image URL
    // e.g., https://qlccfefjyssfesufdgpg.supabase.co/storage/v1/object/public/product-images/first_touch/FI-0000.png
    const urlParts = image_url.split('/product-images/');
    if (urlParts.length > 1) {
      const storagePath = urlParts[1];
      // 1. Delete image from Storage
      const { error: storageError } = await supabaseServer.storage
        .from('product-images')
        .remove([storagePath]);
        
      if (storageError) {
        console.error("Error deleting from storage:", storageError);
      }
    }

    // 2. Delete from Database
    const { error: dbError } = await supabaseServer
      .from('products')
      .delete()
      .eq('id', id);

    if (dbError) throw dbError;

    // Refresh pages
    revalidatePath('/admin');
    revalidatePath('/catalogue');
    revalidatePath('/houses');

    return { success: true };
  } catch (error: any) {
    console.error("Delete product error:", error);
    return { error: error.message || "Failed to delete product" };
  }
}

export async function addProduct(formData: FormData) {
  try {
    const file = formData.get('image') as File;
    const brand = formData.get('brand') as string;
    const category = formData.get('category') as string;
    
    if (!file || !brand || !category) {
      return { error: 'Missing required fields' };
    }

    // Generate a new ID based on brand prefix
    const brandPrefix = brand.substring(0, 2).toUpperCase();
    
    // Find the latest ID for this prefix to increment it
    const { data: latestProducts } = await supabaseServer
      .from('products')
      .select('id')
      .like('id', `${brandPrefix}-%`)
      .order('id', { ascending: false })
      .limit(1);

    let newNumber = 1000; // Start at 1000 if none exist to avoid overlap with our local script
    if (latestProducts && latestProducts.length > 0) {
      const lastId = latestProducts[0].id;
      const lastNumber = parseInt(lastId.split('-')[1], 10);
      if (!isNaN(lastNumber)) {
        newNumber = lastNumber + 1;
      }
    }

    const newId = `${brandPrefix}-${newNumber.toString().padStart(4, '0')}`;
    const fileExt = file.name.split('.').pop() || 'png';
    const folderName = brand.toLowerCase().replace(' ', '_');
    const storagePath = `${folderName}/${newId}.${fileExt}`;

    // 1. Upload to Storage
    const buffer = Buffer.from(await file.arrayBuffer());
    
    const { error: uploadError } = await supabaseServer.storage
      .from('product-images')
      .upload(storagePath, buffer, {
        contentType: file.type,
        upsert: true
      });

    if (uploadError) throw uploadError;

    // Get public URL
    const { data: { publicUrl } } = supabaseServer.storage
      .from('product-images')
      .getPublicUrl(storagePath);

    // 2. Insert into DB
    const { error: dbError } = await supabaseServer
      .from('products')
      .insert({
        id: newId,
        brand,
        category,
        original_filename: file.name,
        image_url: publicUrl
      });

    if (dbError) throw dbError;

    // Refresh pages
    revalidatePath('/admin');
    revalidatePath('/catalogue');
    revalidatePath('/houses');

    return { success: true, id: newId };
  } catch (error: any) {
    console.error("Add product error:", error);
    return { error: error.message || "Failed to add product" };
  }
}
