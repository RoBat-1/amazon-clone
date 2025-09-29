<<<<<<< HEAD

import React, { useState } from 'react';

function groupCartItems(cartItems) {
  const grouped = {};
  cartItems.forEach(item => {
    if (!grouped[item.id]) {
      grouped[item.id] = { ...item, quantity: 0 };
    }
    grouped[item.id].quantity += 1;
  });
  return Object.values(grouped);
}

function Cart({ cartItems, setCartItems }) {
  const groupedItems = groupCartItems(cartItems);
  const totalPrice = groupedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCount = groupedItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleRemove = (id) => {
    const found = cartItems.findIndex(item => item.id === id);
    if (found !== -1) {
      const newCart = [...cartItems];
      newCart.splice(found, 1);
      setCartItems(newCart);
    }
  };

  const handleChangeQty = (id, delta) => {
    const idx = cartItems.findIndex(item => item.id === id);
    if (delta > 0) {
      setCartItems([...cartItems, cartItems[idx]]);
    } else {
      const found = cartItems.findIndex(item => item.id === id);
      if (found !== -1) {
        const newCart = [...cartItems];
        newCart.splice(found, 1);
        setCartItems(newCart);
      }
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h2 style={{ color: '#232f3e', marginBottom: '2rem' }}>Your Cart</h2>
      {groupedItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {groupedItems.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px #0001', marginBottom: '1.5rem', padding: '1rem' }}>
              <img src={item.image} alt={item.name} style={{ height: '80px', width: '80px', objectFit: 'cover', borderRadius: '8px', marginRight: '1rem' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#232f3e' }}>{item.name}</h3>
                <p style={{ margin: '0.5rem 0', color: '#555' }}>${item.price}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button onClick={() => handleChangeQty(item.id, -1)} style={{ padding: '0.3rem 0.7rem', borderRadius: '4px', border: 'none', background: '#eee', fontWeight: 'bold', cursor: 'pointer' }}>-</button>
                  <span style={{ minWidth: 24, textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => handleChangeQty(item.id, 1)} style={{ padding: '0.3rem 0.7rem', borderRadius: '4px', border: 'none', background: '#eee', fontWeight: 'bold', cursor: 'pointer' }}>+</button>
                </div>
              </div>
              <button onClick={() => handleRemove(item.id)} style={{ marginLeft: '1rem', background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 'bold' }}>Remove</button>
            </div>
          ))}
          <div style={{ textAlign: 'right', marginTop: '2rem', fontSize: '1.1rem', color: '#232f3e', fontWeight: 'bold' }}>
            Total ({totalCount} items): ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
=======
import React, { useState } from 'react';

function groupCartItems(cartItems) {
  const grouped = {};
  cartItems.forEach(item => {
    if (!grouped[item.id]) {
      grouped[item.id] = { ...item, quantity: 0 };
    }
    grouped[item.id].quantity += 1;
  });
  return Object.values(grouped);
}

function Cart({ cartItems, setCartItems }) {
  const groupedItems = groupCartItems(cartItems);
  const totalPrice = groupedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCount = groupedItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleRemove = (id) => {
    const found = cartItems.findIndex(item => item.id === id);
    if (found !== -1) {
      const newCart = [...cartItems];
      newCart.splice(found, 1);
      setCartItems(newCart);
    }
  };

  const handleChangeQty = (id, delta) => {
    const idx = cartItems.findIndex(item => item.id === id);
    if (delta > 0) {
      setCartItems([...cartItems, cartItems[idx]]);
    } else {
      const found = cartItems.findIndex(item => item.id === id);
      if (found !== -1) {
        const newCart = [...cartItems];
        newCart.splice(found, 1);
        setCartItems(newCart);
      }
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h2 style={{ color: '#232f3e', marginBottom: '2rem' }}>Your Cart</h2>
      {groupedItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {groupedItems.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px #0001', marginBottom: '1.5rem', padding: '1rem' }}>
              <img src={item.image} alt={item.name} style={{ height: '80px', width: '80px', objectFit: 'cover', borderRadius: '8px', marginRight: '1rem' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#232f3e' }}>{item.name}</h3>
                <p style={{ margin: '0.5rem 0', color: '#555' }}>${item.price}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button onClick={() => handleChangeQty(item.id, -1)} style={{ padding: '0.3rem 0.7rem', borderRadius: '4px', border: 'none', background: '#eee', fontWeight: 'bold', cursor: 'pointer' }}>-</button>
                  <span style={{ minWidth: 24, textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => handleChangeQty(item.id, 1)} style={{ padding: '0.3rem 0.7rem', borderRadius: '4px', border: 'none', background: '#eee', fontWeight: 'bold', cursor: 'pointer' }}>+</button>
                </div>
              </div>
              <button onClick={() => handleRemove(item.id)} style={{ marginLeft: '1rem', background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: '6px', padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 'bold' }}>Remove</button>
            </div>
          ))}
          <div style={{ textAlign: 'right', marginTop: '2rem', fontSize: '1.1rem', color: '#232f3e', fontWeight: 'bold' }}>
            Total ({totalCount} items): ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
>>>>>>> 59140f32fdb0959d77e8762ce9bfd274bbe61da3
