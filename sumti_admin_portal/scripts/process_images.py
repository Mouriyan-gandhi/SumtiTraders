import os
import json
import torch
from pathlib import Path
from PIL import Image
import pillow_heif
from rembg import remove
from transformers import CLIPProcessor, CLIPModel

# Register HEIF opener
pillow_heif.register_heif_opener()

# Directories
DOWNLOADS_DIR = Path.home() / "Downloads"
BRANDS = {
    "First Touch": DOWNLOADS_DIR / "FIRST TOUCH - ST",
    "Sumti": DOWNLOADS_DIR / "FT - SUMTI",
    "Swarnika": DOWNLOADS_DIR / "SWARNIKA - ST"
}
OUTPUT_DIR = Path("public/products")

# Categories for classification
CATEGORIES = ["necklace", "earrings", "bangle", "ring", "maang tikka", "bracelet", "pendant"]

def setup_directories():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for brand in BRANDS.keys():
        (OUTPUT_DIR / brand).mkdir(parents=True, exist_ok=True)

def process_images():
    print("Loading CLIP model for classification...")
    model_id = "openai/clip-vit-base-patch32"
    # use MPS or CPU
    device = "mps" if torch.backends.mps.is_available() else "cpu"
    print(f"Using device: {device}")
    
    model = CLIPModel.from_pretrained(model_id).to(device)
    processor = CLIPProcessor.from_pretrained(model_id)
    
    product_data = []
    
    for brand, folder in BRANDS.items():
        if not folder.exists():
            print(f"Folder not found: {folder}")
            continue
            
        print(f"\nProcessing brand: {brand}")
        for idx, img_path in enumerate(folder.glob("*.*")):
            if img_path.suffix.lower() not in ['.jpg', '.jpeg', '.png', '.heic']:
                continue
                
            out_filename = f"{brand.lower().replace(' ', '_')}_{idx}.png"
            out_path = OUTPUT_DIR / brand / out_filename
            
            # Skip if already exists
            if out_path.exists():
                print(f"Skipping {img_path.name}, already processed.")
                continue
                
            try:
                # Open image
                image = Image.open(img_path).convert("RGB")
                
                # 1. Classification
                inputs = processor(
                    text=[f"a photo of imitation jewellery {cat}" for cat in CATEGORIES],
                    images=image,
                    return_tensors="pt",
                    padding=True
                ).to(device)
                
                with torch.no_grad():
                    outputs = model(**inputs)
                    
                probs = outputs.logits_per_image.softmax(dim=1)[0]
                best_cat_idx = probs.argmax().item()
                category = CATEGORIES[best_cat_idx]
                
                # 2. Background Removal
                print(f"[{brand}] Processing {img_path.name} -> Classified: {category}")
                output_image = remove(image)
                
                # Create a standardized square canvas with transparent background
                bbox = output_image.getbbox()
                if bbox:
                    output_image = output_image.crop(bbox)
                
                # Resize to fit within 800x800
                output_image.thumbnail((800, 800), Image.Resampling.LANCZOS)
                
                # Create 1000x1000 transparent background
                final_image = Image.new("RGBA", (1000, 1000), (0, 0, 0, 0))
                # Paste centered
                offset = ((1000 - output_image.width) // 2, (1000 - output_image.height) // 2)
                final_image.paste(output_image, offset)
                
                # Save as PNG
                final_image.save(out_path, "PNG")
                
                product_data.append({
                    "id": f"{brand[:2].upper()}-{idx:04d}",
                    "brand": brand,
                    "category": category,
                    "original_filename": img_path.name,
                    "image_url": f"/products/{brand}/{out_filename}"
                })
            except Exception as e:
                print(f"Error processing {img_path.name}: {e}")
                
    # Save metadata JSON
    meta_path = Path("public/products/metadata.json")
    if meta_path.exists():
        with open(meta_path, "r") as f:
            try:
                existing = json.load(f)
                existing.extend(product_data)
                product_data = existing
            except:
                pass
            
    with open(meta_path, "w") as f:
        json.dump(product_data, f, indent=2)
        
    print(f"\nProcessed successfully. Total records: {len(product_data)}")

if __name__ == "__main__":
    setup_directories()
    process_images()
