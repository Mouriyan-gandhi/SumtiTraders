-- Create products table
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  brand TEXT NOT NULL,
  category TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Public profiles are viewable by everyone."
  ON products FOR SELECT
  USING ( true );

-- Note: In a real app, you'd add policies for INSERT/UPDATE/DELETE 
-- restricted to authenticated admins.

-- Create storage bucket for product images (You might need to do this via the Dashboard Storage UI)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('product-images', 'product-images', true);
