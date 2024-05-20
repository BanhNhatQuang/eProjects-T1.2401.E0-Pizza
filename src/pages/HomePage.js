import React from 'react';
import './HomePage.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate()
    return (
        <div className='row'>
            <Routes>
                <Route />
                <Route />
                <Route />
            </Routes>
            <div className="container-fluid" style={{ padding: '2rem' }}>
                <h2 className='title'>Promotes and Comboes</h2>
                {/* Row 1 */}
                <div className="row gx-5">
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/combo1.jpeg"
                                className="card-img-top"
                                alt="Card"
                                style={{ maxWidth: '90%' }}
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Buy 1 any Pizza and get 1 vegeterian pizza free</Link></h5>
                                <p className="card-text">Buy 1 Pizza size L, get 1 Free Classic Pizza (Thick/Thin Crust) of the same size.</p>
                                <Link to="/" className="btn btn-success">Only 169.000</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/combo2.jpeg"
                                className="card-img-top"
                                alt="Card"
                                style={{ maxWidth: '90%' }}
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Buy 1 Get 1 Free Any Pizza Size L</Link></h5>
                                <p className="card-text">Buy 1 Pizza size L, get 1 Free Classic Pizza (Thick/Thin Crust) of the same size.</p>
                                <Link to="/" className="btn btn-success">Only 309.000</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/combo3.jpeg"
                                className="card-img-top"
                                alt="Card"
                                style={{ maxWidth: '90%' }}
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Buy Giant Pizza 50% Off</Link></h5>
                                <p className="card-text">50% off on giant size Pizza, bigger portions, more economical, better quality</p>
                                <Link to="/" className="btn btn-success">Only 250.000</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/combo4.jpeg"
                                className="card-img-top"
                                alt="Card"
                                style={{ maxWidth: '90%' }}
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Buy 1 Get 1 Free Pizza Size M Super Deal</Link></h5>
                                <p className="card-text">Buy 1 Pizza size M, get 1 Free Classic Pizza (Thick/Thin Crust) of the same size.</p>
                                <Link to="/" className="btn btn-success">Only 79.000</Link>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="row gx-5 mt-4">
                    <div className="col-12">
                        <h2 className='title'>Menu</h2>
                        <hr style={{ width: '20%', border: '1px solid #00a859' }} />
                        <h2 className='title'>Pizza</h2>
                    </div>
                </div>

               
                <div className="row gx-5 mt-4">
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/pizza1.png"
                                className="card-img-top"
                                alt="Card"
                                onClick={()=>navigate("/detail/2")}
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Green Pesto Seafood Pizza</Link></h5>
                                <p className="card-text">Fresh shrimp, squid and broccoli on a base of Green Pesto sauce</p>
                                <Link to="/detail/2" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/pizza2.png"
                                className="card-img-top"
                                alt="Card"
                                onClick={()=>navigate("/detail/6")}
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Pizza Shrimp Cocktail</Link></h5>
                                <p className="card-text">Shrimp with mushrooms, pineapple, tomatoes and Thousand Island dressing.</p>
                                <Link to="/detail/6" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/pizza3.png"
                                className="card-img-top"
                                onClick={()=>navigate("/detail/3")}
                                alt="Card"
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Pesto Seafood Pizza</Link></h5>
                                <p className="card-text">Fresh shrimp, squid and broccoli on a bed of Green Pesto sauce</p>
                                <Link to="/detail/3" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/pizza4.png"
                                className="card-img-top"
                                onClick={()=>navigate("/detail/5")}
                                alt="Card"
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Tropical Seafood Pizza</Link></h5>
                                <p className="card-text">Shrimp, clams, crab squid, pineapple with Thousand Island sauce</p>
                                <Link to="/detail/5" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                <h3 className="title">Starter</h3>
                <div className="row gx-5">
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/khaivi1.png"
                                className="card-img-top"
                                onClick={()=>navigate("/detailKhaiVi/7")}
                                alt="Card"
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Crispy Chicken with Traditional Korean Sauce (2 pieces)</Link></h5>
                                <p className="card-text">It's more delicious when served with honey mustard sauce and fermented radish.</p>
                                <Link to="/detailKhaiVi/7" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/khaivi1.png"
                                className="card-img-top"
                                onClick={()=>navigate("/detailKhaiVi/8")}
                                alt="Card"
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Crispy Chicken with Traditional Korean Sauce (5 pieces)</Link></h5>
                                <p className="card-text">It's more delicious when served with honey mustard sauce and fermented radish.</p>
                                <Link to="/detailKhaiVi/8" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/khaivi1.png"
                                className="card-img-top"
                                alt="Card"
                                onClick={()=>navigate("/detailKhaiVi/9")}
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Crispy Chicken with Traditional Korean Sauce (9 pieces)</Link></h5>
                                <p className="card-text">It's more delicious when served with honey mustard sauce and fermented radish.</p>
                                <Link to="/detailKhaiVi/9" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/khaivi4.png"
                                className="card-img-top"
                                onClick={()=>navigate("/detailKhaiVi/10")}
                                alt="Card"
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Crispy Chicken with Garlic Sauce (2 pieces)</Link></h5>
                                <p className="card-text">Special formula mixed with a light taste and aroma of ginger and garlic.</p>
                                <Link to="/detailKhaiVi/10" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 4 */}
                {/* <h3 className="title">Mì Ý</h3> */}
                {/* <div className="row gx-5">
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/miy1.png"
                                className="card-img-top"
                                alt="Card"
                                style={{ maxWidth: '90%' }}
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Mì Ý Hải Sản</Link></h5>
                                <p className="card-text">Mỳ Ý rán với các loại hải sản tươi cùng ớt và tỏi</p>
                                <Link to="/" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/miy2.png"
                                className="card-img-top"
                                alt="Card"
                                style={{ maxWidth: '90%' }}
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Mì Ý Xúc Xích</Link></h5>
                                <p className="card-text">Mỳ Ý rán với các loại xúc xích cùng ớt và tỏi</p>
                                <Link to="/" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/miy3.png"
                                className="card-img-top"
                                alt="Card"
                                style={{ maxWidth: '90%' }}
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Mì Ý Tôm</Link></h5>
                                <p className="card-text">Sự tươi ngon của tôm kết hợp với sốt kem cà chua</p>
                                <Link to="/" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 text-start">
                        <div className="card" style={{ width: '18rem' }}>
                            <img
                                src="/hinhanhhomepage/miy4.png"
                                className="card-img-top"
                                alt="Card"
                                style={{ maxWidth: '90%' }}
                            />
                            <div className="card-body">
                                <h5><Link to="/" className="card-title">Mì Ý Bò Bằm</Link></h5>
                                <p className="card-text">Sốt thịt bò bằm đặc trưng kết hợp cùng mỳ Ý</p>
                                <Link to="/" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default HomePage;
