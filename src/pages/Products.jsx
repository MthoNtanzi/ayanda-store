import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, [limit]);

  return (
    <div>
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!loading && (
        <button onClick={() => setLimit(limit + 12)} style={{ marginTop: 20 }}>
          Load More
        </button>
      )}
    </div>
  );
}
