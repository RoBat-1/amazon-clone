<<<<<<< HEAD
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';

// Dummy PRODUCTS import workaround

function ProductPage({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div style={{ padding: '2rem' }}>Product not found.</div>;
  }

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 16px #0002', padding: '2rem' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '1rem', background: '#eee', border: 'none', borderRadius: '6px', padding: '0.5rem 1rem', cursor: 'pointer' }}>Back</button>
      <h2 style={{ color: '#232f3e', marginBottom: '1rem' }}>{product.name}</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 220px' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '220px', borderRadius: '12px', boxShadow: '0 2px 8px #0001' }} />
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {product.photos.map((url, idx) => (
              <img key={idx} src={url} alt={product.name + ' photo ' + (idx + 1)} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 1px 4px #0001' }} />
            ))}
          </div>
        </div>
        <div style={{ flex: '2 1 300px' }}>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>{product.description}</p>
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#232f3e' }}>${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
=======
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';

function ProductPage({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div style={{ padding: '2rem' }}>Product not found.</div>;
  }

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 16px #0002', padding: '2rem' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '1rem', background: '#eee', border: 'none', borderRadius: '6px', padding: '0.5rem 1rem', cursor: 'pointer' }}>Back</button>
      <h2 style={{ color: '#232f3e', marginBottom: '1rem' }}>{product.name}</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 220px' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '220px', borderRadius: '12px', boxShadow: '0 2px 8px #0001' }} />
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {product.photos.map((url, idx) => (
              <img key={idx} src={url} alt={product.name + ' photo ' + (idx + 1)} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 1px 4px #0001' }} />
            ))}
          </div>
        </div>
        <div style={{ flex: '2 1 300px' }}>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>{product.description}</p>
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#232f3e' }}>${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
>>>>>>> 59140f32fdb0959d77e8762ce9bfd274bbe61da3
