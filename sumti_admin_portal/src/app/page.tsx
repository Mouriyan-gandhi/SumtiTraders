'use client'

import React, { useState, useEffect } from 'react'
import SiteLayout from '@/components/SiteLayout'
import { supabase } from '@/lib/supabase'
import { deleteProduct } from './actions'
import ProductModal from '@/components/admin/ProductModal'

type Product = {
  id: string;
  brand: string;
  category: string;
  original_filename: string;
  image_url: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  const fetchProducts = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (data) setProducts(data)
    if (error) console.error("Error fetching products:", error)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!window.confirm('Are you sure you want to delete this piece?')) return;
    
    setIsDeleting(id)
    const res = await deleteProduct(id, imageUrl)
    if (res.error) {
      alert(res.error)
    } else {
      setProducts(prev => prev.filter(p => p.id !== id))
    }
    setIsDeleting(null)
  }

  const filteredProducts = products.filter(p => 
    p.id.toLowerCase().includes(search.toLowerCase()) || 
    p.brand.toLowerCase().includes(search.toLowerCase()) || 
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <SiteLayout>
      <div style={{ padding: '40px clamp(22px, 4vw, 60px)', background: 'var(--cream-base)', minHeight: '80vh' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(138,109,42,.2)', paddingBottom: 20, marginBottom: 30 }}>
          <div>
            <div className="eyebrow">Inventory Management</div>
            <h1 className="display" style={{ fontSize: 48, marginTop: 10 }}>Admin Dashboard</h1>
          </div>
          <div>
            <button className="btn solid" onClick={() => setIsModalOpen(true)}>+ Add New Piece</button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
          <input 
            type="text" 
            placeholder="Search by ID, Brand, or Category..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ 
              padding: '10px 16px', 
              width: 300, 
              background: 'transparent', 
              border: '1px solid rgba(138,109,42,.4)',
              fontFamily: 'var(--f-body)'
            }}
          />
          <div className="eyebrow" style={{ alignSelf: 'center' }}>Total: {filteredProducts.length} pieces</div>
        </div>

        <div style={{ background: 'var(--cream-paper)', border: '1px solid rgba(138,109,42,.2)', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(138,109,42,.2)', background: 'var(--cream-warm)' }}>
                <th style={{ padding: '16px 20px', fontWeight: 'normal' }} className="eyebrow">Image</th>
                <th style={{ padding: '16px 20px', fontWeight: 'normal' }} className="eyebrow">Ref ID</th>
                <th style={{ padding: '16px 20px', fontWeight: 'normal' }} className="eyebrow">Brand</th>
                <th style={{ padding: '16px 20px', fontWeight: 'normal' }} className="eyebrow">Category</th>
                <th style={{ padding: '16px 20px', fontWeight: 'normal' }} className="eyebrow">Date Added</th>
                <th style={{ padding: '16px 20px', fontWeight: 'normal', textAlign: 'right' }} className="eyebrow">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} style={{ padding: 40, textAlign: 'center', fontStyle: 'italic' }}>Loading inventory...</td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: 40, textAlign: 'center', fontStyle: 'italic' }}>No pieces found.</td>
                </tr>
              ) : (
                filteredProducts.map(p => (
                  <tr key={p.id} style={{ borderBottom: '1px solid rgba(138,109,42,.1)' }}>
                    <td style={{ padding: '12px 20px' }}>
                      <div style={{ width: 48, height: 48, background: 'var(--cream-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {p.image_url ? (
                          <img src={p.image_url} alt={p.id} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} loading="lazy" />
                        ) : (
                          <span style={{ fontSize: 10, color: '#999' }}>No Img</span>
                        )}
                      </div>
                    </td>
                    <td style={{ padding: '12px 20px', fontFamily: 'var(--f-body)' }}>{p.id}</td>
                    <td style={{ padding: '12px 20px' }}>{p.brand}</td>
                    <td style={{ padding: '12px 20px', textTransform: 'capitalize' }}>{p.category}</td>
                    <td style={{ padding: '12px 20px', fontSize: 14, color: 'var(--ink-muted)' }}>
                      {new Date(p.created_at).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                      <button 
                        onClick={() => handleDelete(p.id, p.image_url)}
                        disabled={isDeleting === p.id}
                        style={{ 
                          background: 'none', border: 'none', cursor: 'pointer', 
                          color: isDeleting === p.id ? 'gray' : 'red', 
                          textDecoration: 'underline', fontFamily: 'var(--f-body)' 
                        }}
                      >
                        {isDeleting === p.id ? 'Deleting...' : 'Delete'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>

      {isModalOpen && (
        <ProductModal 
          onClose={() => setIsModalOpen(false)} 
          onSuccess={fetchProducts} 
        />
      )}
    </SiteLayout>
  )
}
