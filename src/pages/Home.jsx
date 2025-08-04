import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Ayanda Store</h1>
      <p>Your go-to place for top quality products.</p>
      <Link to="/products">Browse Products</Link>
    </div>
  );
}
