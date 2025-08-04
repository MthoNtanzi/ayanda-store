import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#222', padding: '1rem', color: '#fff' }}>
      <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
      <Link to="/products" style={{ color: 'white' }}>Products</Link>
    </nav>
  );
}
