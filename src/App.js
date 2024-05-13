import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Header from './Components/Header';
import Product from './pages/Product';
import { useEffect, useState } from 'react';
import Khaivi from './pages/Khaivi';
import MyY from './pages/MyY';
import Salad from './pages/Salad';
import ThucUong from './pages/ThucUong';
// import DetailCard from './Detail/DetailCard1';
import DetailCard1 from './Detail/DetailCard1';
import DetailCard2 from './Detail/DetailCard2';
import DetailCard3 from './Detail/DetailCard3';
import DetailCard4 from './Detail/DetailCard4';
import DetailCard5 from './Detail/DetailCard5';
import DetailCard6 from './Detail/DetailCard6';
import DetailCard7 from './Detail/DetailCard7';
import DetailCard8 from './Detail/DetailCard8';
import DetailCard9 from './Detail/DetailCard9';
import DetailCard10 from './Detail/DetailCard10';
import DetailCard11 from './Detail/DetailCard11';
import DetailCard12 from './Detail/DetailCard12';
import DetailCard13 from './Detail/DetailCard13';
import DetailCard14 from './Detail/DetailCard14';
import DetailCard15 from './Detail/DetailCard15';
import DetailCard16 from './Detail/DetailCard16';
import DetailCard17 from './Detail/DetailCard17';
import DetailCard18 from './Detail/DetailCard18';
import DetailCard19 from './Detail/DetailCard19';
import DetailKhaiVi1 from './DetailKhaiVi/DetailKhaiVi1';
import DetailKhaiVi2 from './DetailKhaiVi/DetailKhaiVi2';
import DetailKhaiVi3 from './DetailKhaiVi/DetailKhaiVi3';
import DetailKhaiVi4 from './DetailKhaiVi/DetailKhaiVi4';
import DetailKhaiVi5 from './DetailKhaiVi/DetailKhaiVi5';
import DetailKhaiVi6 from './DetailKhaiVi/DetailKhaiVi6';
import DetailKhaiVi7 from './DetailKhaiVi/DetailKhaiVi7';
import DetailKhaiVi8 from './DetailKhaiVi/DetailKhaiVi8';
import DetailKhaiVi9 from './DetailKhaiVi/DetailKhaiVi9';
import DetailKhaiVi10 from './DetailKhaiVi/DetailKhaiVi10';
import DetailKhaiVi11 from './DetailKhaiVi/DetailKhaiVi11';
import DetailKhaiVi12 from './DetailKhaiVi/DetailKhaiVi12';
import DetailSalad1 from './SaladDetail/DetailSalad1';
import HomePage from './pages/HomePage';
// import HomePage from './pages/HomePage';
import Footer from './Components/Footer';
import DacBiet from './Cards/DacBiet';
import TruyenThong from './Cards/TruyenThong';
import HaiSan from './Cards/HaiSan';
import ThapCamCaoCap from './Cards/ThapCamCaoCap';
import Chay from './Cards/Chay';
// import DetailCard2 from './Detail/DetailCard2'
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
        <Route element={<Product products={products}></Product>} path='/Product'>
          {/* <Route element={<DetailCard2 products={products} />} path='detail/2'></Route> */}
          {/* <Route element={<DetailCard3 products={products} />} path='detail/3'></Route> */}
          {/* <Route element={<DetailCard4 products={products} />} path='detail/4'></Route> */}
        </Route>
        {/* <Route element={<DetailCard products={products} />} path='/detail'> */}
        <Route element={<DetailCard1 products={products} />} path='/detail/1'></Route>
        <Route element={<DetailCard2 products={products} />} path='/detail/2'></Route>
        <Route element={<DetailCard3 products={products} />} path='/detail/3'></Route>
        <Route element={<DetailCard4 products={products} />} path='/detail/4'></Route>
        <Route element={<DetailCard5 products={products} />} path='/detail/5'></Route>
        <Route element={<DetailCard6 products={products} />} path='/detail/6'></Route>
        <Route element={<DetailCard7 products={products} />} path='/detail/7'></Route>
        <Route element={<DetailCard8 products={products} />} path='/detail/8'></Route>
        <Route element={<DetailCard9 products={products} />} path='/detail/9'></Route>
        <Route element={<DetailCard10 products={products} />} path='/detail/10'></Route>
        <Route element={<DetailCard11 products={products} />} path='/detail/11'></Route>
        <Route element={<DetailCard12 products={products} />} path='/detail/12'></Route>
        <Route element={<DetailCard13 products={products} />} path='/detail/13'></Route>
        <Route element={<DetailCard14 products={products} />} path='/detail/14'></Route>
        <Route element={<DetailCard15 products={products} />} path='/detail/15'></Route>
        <Route element={<DetailCard16 products={products} />} path='/detail/16'></Route>
        <Route element={<DetailCard17 products={products} />} path='/detail/17'></Route>
        {/* <Route element={<DetailCard18 products={products} />} path='/detail/18'></Route> */}
        <Route element={<DetailCard19 products={products} />} path='/detail/19'></Route>
        
        <Route element={<DetailKhaiVi1 products={products} />} path='/detailKhaiVi/1'></Route>
        <Route element={<DetailKhaiVi2 products={products} />} path='/detailKhaiVi/2'></Route>
        <Route element={<DetailKhaiVi3 products={products} />} path='/detailKhaiVi/3'></Route>
        <Route element={<DetailKhaiVi4 products={products} />} path='/detailKhaiVi/4'></Route>
        <Route element={<DetailKhaiVi5 products={products} />} path='/detailKhaiVi/5'></Route>
        <Route element={<DetailKhaiVi6 products={products} />} path='/detailKhaiVi/6'></Route>
        <Route element={<DetailKhaiVi7 products={products} />} path='/detailKhaiVi/7'></Route>
        <Route element={<DetailKhaiVi8 products={products} />} path='/detailKhaiVi/8'></Route>
        <Route element={<DetailKhaiVi9 products={products} />} path='/detailKhaiVi/9'></Route>
        <Route element={<DetailKhaiVi10 products={products} />} path='/detailKhaiVi/10'></Route>
        <Route element={<DetailKhaiVi11 products={products} />} path='/detailKhaiVi/11'></Route>
        <Route element={<DetailKhaiVi12 products={products} />} path='/detailKhaiVi/12'></Route>
        {/* </Route> */}
        <Route element={<DetailSalad1 products={products} />} path='/SaladDetail/1'></Route>

        <Route element={<Khaivi setKhaiVi={setKhaiVi} KhaiVi={KhaiVi}></Khaivi>} path='/Khaivi'></Route>
        <Route element={<DacBiet></DacBiet>} path='/DacBiet'></Route>
        <Route element={<TruyenThong></TruyenThong>} path='/TruyenThong'></Route>
        <Route element={<HaiSan></HaiSan>} path='/HaiSan'></Route>
        <Route element={<ThapCamCaoCap></ThapCamCaoCap>} path='/ThapCamCaoCap'></Route>
        <Route element={<Chay></Chay>} path='/Chay'></Route>
        <Route element={<MyY></MyY>} path='/MyY'></Route>
        <Route element={<Salad></Salad>} path='/Salad'></Route>
        <Route element={<ThucUong></ThucUong>} path='/ThucUong'></Route>
        <Route element={<HomePage></HomePage>} path='/'></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
