import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div>
        <h1>Welcome to Ayanda's Store</h1>
        <p>Your go-to place for top quality products. Explore products in our store and find your perfect item. We cater for you and your home, so feel free to explore the store.</p>
        <Link to="/products">Browse Products</Link>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg" alt="Store Banner" style={{ width: '100%', height: 'auto' }} />
        <img src="https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg" alt="Store Banner" style={{ width: '100%', height: 'auto' }} />
        <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg" alt="Store Banner" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
}