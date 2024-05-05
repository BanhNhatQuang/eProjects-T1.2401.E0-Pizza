import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Header from './Components/Header';
import Product from './pages/Product';
import { useEffect, useState } from 'react';
import Khaivi from './pages/Khaivi';
import MyY from './pages/MyY';
import Salad from './pages/Salad';
import ThucUong from './pages/ThucUong';
function App() {
    const [products, setProducts] = useState([])
    const [KhaiVi, setKhaiVi] = useState([])
    useEffect(() => {
        fetch("/data/khai-vi.json")
        .then(res => res.json())
        .then(data => setKhaiVi(data))
    }, [])
    useEffect(() => {
      fetch("/data/products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
    console.log("hello", products);
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        {/* <Route element={<App setProducts={setProducts} products={products}></App>} path='/'></Route> */}
        <Route element={<Product setProducts={setProducts} products={products}></Product>} path='/Product'></Route>
        <Route element={<Khaivi setKhaiVi={setKhaiVi} KhaiVi={KhaiVi}></Khaivi>} path='/Khaivi'></Route>
        <Route element={<MyY></MyY>} path='/MyY'></Route>
        <Route element={<Salad></Salad>} path='/Salad'></Route>
        <Route element={<ThucUong></ThucUong>} path='/ThucUong'></Route>
      </Routes>
    </div>
  );
}

export default App;
