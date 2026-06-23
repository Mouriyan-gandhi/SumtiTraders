const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupAndUpload() {
  // 1. Ensure Bucket exists
  const { data: buckets } = await supabase.storage.listBuckets();
  const bucketExists = buckets?.find(b => b.name === 'product-images');
  
  if (!bucketExists) {
    console.log("Creating 'product-images' bucket...");
    const { error } = await supabase.storage.createBucket('product-images', { public: true });
    if (error) console.error("Error creating bucket:", error);
  }

  // 2. Read Metadata
  const metadataPath = path.join(process.cwd(), 'public/products/metadata.json');
  if (!fs.existsSync(metadataPath)) {
    console.error("metadata.json not found! Ensure the Python script has finished running.");
    process.exit(1);
  }

  const products = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
  console.log(`Starting upload for ${products.length} products...`);

  for (const product of products) {
    // Check if product already exists to avoid redundant uploads
    const { data: existing } = await supabase
      .from('products')
      .select('id')
      .eq('id', product.id)
      .single();
      
    if (existing) {
      console.log(`[SKIP] Product ${product.id} already in database.`);
      continue;
    }

    const localImagePath = path.join(process.cwd(), 'public', product.image_url.substring(1));
    if (!fs.existsSync(localImagePath)) {
      console.warn(`[WARN] Local image not found: ${localImagePath}`);
      continue;
    }

    const fileExt = 'png';
    const storagePath = `${product.brand.toLowerCase().replace(' ', '_')}/${product.id}.${fileExt}`;
    
    // Upload image
    console.log(`[UPLOAD] Uploading ${product.id}...`);
    const fileBuffer = fs.readFileSync(localImagePath);
    const { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(storagePath, fileBuffer, {
        contentType: 'image/png',
        upsert: true
      });

    if (uploadError) {
      console.error(`[ERROR] Failed to upload image for ${product.id}:`, uploadError);
      continue;
    }

    const { data: publicUrlData } = supabase.storage.from('product-images').getPublicUrl(storagePath);
    
    // Insert into database
    const { error: dbError } = await supabase
      .from('products')
      .insert({
        id: product.id,
        brand: product.brand,
        category: product.category,
        original_filename: product.original_filename,
        image_url: publicUrlData.publicUrl
      });

    if (dbError) {
      console.error(`[ERROR] DB Insert failed for ${product.id}:`, dbError);
    } else {
      console.log(`[SUCCESS] ${product.id} added to database.`);
    }
  }
  console.log("Upload process completed!");
}

setupAndUpload();
