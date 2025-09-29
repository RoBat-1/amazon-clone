


import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import SignIn from './SignIn';
import ProductPage from './ProductPage';

const PRODUCTS = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    description: 'High-quality electronic gadget with advanced features and sleek design. Perfect for tech enthusiasts.',
    photos: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
    description: 'A captivating book that takes you on a journey through time and imagination. Great for all ages.',
    photos: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 3,
    name: 'Product 3',
    price: 19.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
    description: 'Stylish and comfortable clothing item, perfect for everyday wear or special occasions.',
    photos: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 4,
    name: 'Product 4',
    price: 19.99,
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Essential home and kitchen item to make your life easier and more enjoyable.',
    photos: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 5,
    name: 'Product 5',
    price: 19.99,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Fun and engaging toy for kids of all ages. Safe, durable, and designed for hours of play.',
    photos: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1511453672302-8b7b0b7c7c5c?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 6,
    name: 'Product 6',
    price: 19.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
    description: 'High-performance sports equipment for athletes and fitness enthusiasts.',
    photos: [
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1505843277352-5b7d7b7c7c5c?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80'
    ]
  },
];

function Home({ cartItems, setCartItems, selectedCategory, setSelectedCategory }) {
  const navigate = useNavigate();
  const filtered = selectedCategory ? PRODUCTS.filter(p => p.category === selectedCategory) : PRODUCTS;
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        background: '#f5f5f5',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {/* Sidebar Categories */}
      <aside
        style={{
          width: '220px',
          minWidth: '160px',
          maxWidth: '90vw',
          background: '#fff',
          padding: '2rem 1rem',
          borderRight: '1px solid #eee',
          minHeight: 'calc(100vh - 120px)',
          boxSizing: 'border-box',
        }}
      >
        <h3 style={{ marginBottom: '1.5rem', color: '#232f3e' }}>Categories</h3>
        <ul style={{ listStyle: 'none', padding: 0, color: '#333' }}>
          {['Electronics', 'Books', 'Clothing', 'Home & Kitchen', 'Toys', 'Sports'].map(cat => (
            <li
              key={cat}
              style={{
                marginBottom: '1rem',
                cursor: 'pointer',
                fontWeight: selectedCategory === cat ? 'bold' : 'normal',
                fontSize: '1rem',
              }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
          <li style={{ marginTop: '2rem', cursor: 'pointer', color: '#888' }} onClick={() => setSelectedCategory(null)}>
            All Categories
          </li>
        </ul>
      </aside>
      {/* Product Grid */}
      <main
        style={{
          flex: 1,
          padding: '2rem',
          minWidth: '220px',
          boxSizing: 'border-box',
        }}
      >
        <h2 style={{ color: '#232f3e' }}>{selectedCategory || 'Featured'} Products</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          {filtered.map(product => (
            <div
              key={product.id}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '16px',
                padding: '1.5rem 1rem',
                background: '#fff',
                boxShadow: '0 4px 16px #0002',
                minWidth: '0',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {product.image ? (
                <img src={product.image} alt={product.name} style={{ height: '140px', width: '100%', maxWidth: '180px', objectFit: 'cover', marginBottom: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px #0001' }} />
              ) : (
                <div style={{ height: '140px', width: '100%', maxWidth: '180px', background: '#e3e3e3', marginBottom: '1rem', borderRadius: '12px' }}></div>
              )}
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '0.5rem 0 0.25rem 0', color: '#232f3e', textAlign: 'center' }}>{product.name}</h3>
              <p style={{ fontSize: '1rem', color: '#555', margin: '0 0 1rem 0', textAlign: 'center' }}>${product.price}</p>
              <button
                style={{
                  width: '100%',
                  padding: '0.7rem',
                  background: 'linear-gradient(90deg, #ff9900 0%, #ffd814 100%)',
                  color: '#232f3e',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontSize: '1rem',
                  marginTop: 'auto',
                  boxShadow: '0 2px 8px #0002',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = 'linear-gradient(90deg, #ffd814 0%, #ff9900 100%)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'linear-gradient(90deg, #ff9900 0%, #ffd814 100%)';
                  e.currentTarget.style.color = '#232f3e';
                }}
                onClick={event => {
                  event.stopPropagation();
                  setCartItems([...cartItems, product]);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation Bar */}
      <nav
        style={{
          background: '#232f3e',
          color: 'white',
          padding: '1rem 2vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          style={{ height: '40px', cursor: 'pointer', maxWidth: '120px', width: '100%' }}
          onClick={() => {
            setSelectedCategory(null);
            navigate('/');
          }}
        />
        <input
          type="text"
          placeholder="Search products..."
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '4px',
            border: 'none',
            margin: '0 1rem',
            flex: 1,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
          <button
            style={{
              marginRight: '0.5rem',
              padding: '0.6rem 1.2rem',
              borderRadius: '10px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #232f3e 0%, #ff9900 100%)',
              color: '#fff',
              boxShadow: '0 2px 8px #0002',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #ff9900 0%, #232f3e 100%)';
              e.currentTarget.style.color = '#ffd814';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #232f3e 0%, #ff9900 100%)';
              e.currentTarget.style.color = '#fff';
            }}
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button>
          <button
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '10px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #ffd814 0%, #ff9900 100%)',
              color: '#232f3e',
              boxShadow: '0 2px 8px #0002',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #ff9900 0%, #ffd814 100%)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #ffd814 0%, #ff9900 100%)';
              e.currentTarget.style.color = '#232f3e';
            }}
            onClick={() => navigate('/cart')}
          >
            Cart ({cartItems.length})
          </button>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              setCartItems={setCartItems}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />
        <Route path="/product/:id" element={<ProductPage products={PRODUCTS} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      {/* Footer */}
      <footer
        style={{
          background: '#232f3e',
          color: 'white',
          textAlign: 'center',
          padding: '1rem',
          marginTop: 'auto',
          fontSize: '1rem',
        }}
      >
        &copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
