import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: '#eee',
      padding: '1rem',
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      <p>&copy; {new Date().getFullYear()} Ayanda Store. All rights reserved.</p>
    </footer>
  );
}
