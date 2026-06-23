const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const DOWNLOADS_DIR = path.join(require('os').homedir(), 'Downloads');
const BRANDS_DIR = {
  "First Touch": path.join(DOWNLOADS_DIR, "FIRST TOUCH - ST"),
  "Sumti": path.join(DOWNLOADS_DIR, "FT - SUMTI"),
  "Swarnika": path.join(DOWNLOADS_DIR, "SWARNIKA - ST")
};

async function run() {
  console.log("Wiping existing products...");
  // Delete all products
  const { error: delError } = await supabase.from('products').delete().neq('id', '0');
  if (delError) console.error("Error wiping products:", delError);

  const metadataPath = path.join(process.cwd(), 'public/products/metadata.json');
  const products = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

  console.log(`Starting upload for ${products.length} original files...`);

  for (const product of products) {
    const originalFile = path.join(BRANDS_DIR[product.brand], product.original_filename);
    
    if (!fs.existsSync(originalFile)) {
      console.warn(`[WARN] Original file missing: ${originalFile}`);
      continue;
    }

    const fileExt = product.original_filename.split('.').pop().toLowerCase();
    const storagePath = `${product.brand.toLowerCase().replace(' ', '_')}/${product.id}_orig.${fileExt}`;
    
    console.log(`[UPLOAD] ${product.id} from ${product.original_filename}...`);
    
    const fileBuffer = fs.readFileSync(originalFile);
    
    // Determine content type
    let contentType = 'image/jpeg';
    if (fileExt === 'png') contentType = 'image/png';
    else if (fileExt === 'heic') contentType = 'image/heic';

    const { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(storagePath, fileBuffer, {
        contentType,
        upsert: true
      });

    if (uploadError) {
      console.error(`[ERROR] Storage upload failed for ${product.id}:`, uploadError);
      continue;
    }

    const { data: publicUrlData } = supabase.storage.from('product-images').getPublicUrl(storagePath);

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
    }
  }
  console.log("Finished uploading originals.");
}

run();
