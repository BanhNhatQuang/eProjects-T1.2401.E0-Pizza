import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Product from './pages/Product';
import { useEffect, useState } from 'react';
function App() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("/data/products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    console.log("hello");
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route element={<Product setProducts={setProducts} products={products}></Product>} path='/Product'></Route>
      </Routes>
    </div>
  );
}

export default App;
