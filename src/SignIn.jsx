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
