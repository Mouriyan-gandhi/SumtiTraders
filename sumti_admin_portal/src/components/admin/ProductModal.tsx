'use client'

import React, { useState } from 'react'
import { addProduct } from '@/app/admin/actions'

export default function ProductModal({ onClose, onSuccess }: { onClose: () => void, onSuccess: () => void }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const formData = new FormData(e.currentTarget)
    const file = formData.get('image') as File
    if (file && file.size === 0) {
      setError('Please select an image file.')
      setLoading(false)
      return
    }

    const res = await addProduct(formData)
    
    if (res.error) {
      setError(res.error)
      setLoading(false)
    } else {
      onSuccess()
      onClose()
    }
  }

  return (
    <div className="lightbox open" onClick={onClose} style={{ zIndex: 100 }}>
      <div className="panel" onClick={e => e.stopPropagation()} style={{ maxWidth: 500, padding: 30, background: 'var(--cream-base)' }}>
        <h2 className="display" style={{ fontSize: 32, marginBottom: 20 }}>Add New Piece</h2>
        
        {error && <div style={{ color: 'red', marginBottom: 15, fontSize: 14 }}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
          
          <div>
            <label className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>Brand</label>
            <select name="brand" required style={{ width: '100%', padding: '10px', background: 'transparent', border: '1px solid var(--ink)', fontFamily: 'var(--f-body)', fontSize: 16 }}>
              <option value="First Touch">First Touch</option>
              <option value="Swarnika">Swarnika</option>
              <option value="Sumti">Sumti</option>
            </select>
          </div>

          <div>
            <label className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>Category</label>
            <select name="category" required style={{ width: '100%', padding: '10px', background: 'transparent', border: '1px solid var(--ink)', fontFamily: 'var(--f-body)', fontSize: 16 }}>
              <option value="necklace">Necklace</option>
              <option value="earrings">Earrings</option>
              <option value="bangle">Bangle</option>
              <option value="ring">Ring</option>
              <option value="maang tikka">Maang Tikka</option>
              <option value="bracelet">Bracelet</option>
              <option value="pendant">Pendant</option>
            </select>
          </div>

          <div>
            <label className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>Original Image</label>
            <input type="file" name="image" accept="image/png, image/jpeg, image/heic" required style={{ width: '100%' }} />
            <p style={{ fontSize: 12, marginTop: 4, color: 'var(--ink-muted)' }}>Upload the original untouched image (JPG, PNG, HEIC).</p>
          </div>

          <div style={{ marginTop: 20, display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
            <button type="button" onClick={onClose} className="btn" style={{ padding: '8px 16px' }}>Cancel</button>
            <button type="submit" disabled={loading} className="btn solid" style={{ padding: '8px 16px' }}>
              {loading ? 'Uploading...' : 'Save Piece'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
