import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 10, margin: 10, width: 250 }}>
      <img src={product.thumbnail} alt={product.title} width="100%" />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}
