import { Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}

export default App
