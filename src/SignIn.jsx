<<<<<<< HEAD
import React from 'react';

function SignIn() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Sign In</h2>
      <form style={{ maxWidth: 300 }}>
        <div style={{ marginBottom: '1rem' }}>
          <input type="email" placeholder="Email" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input type="password" placeholder="Password" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '0.5rem', background: '#ffd814', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
=======
import React from 'react';

function SignIn() {
  return (
    <div style={{ padding: '2rem', maxWidth: 400, margin: '0 auto' }}>
      <h2 style={{ color: '#232f3e', marginBottom: '2rem' }}>Sign In</h2>
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
          <input type="email" id="email" style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Password:</label>
          <input type="password" id="password" style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '0.7rem', background: 'linear-gradient(90deg, #232f3e 0%, #ff9900 100%)', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '1rem', boxShadow: '0 2px 8px #0002', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
>>>>>>> 59140f32fdb0959d77e8762ce9bfd274bbe61da3
