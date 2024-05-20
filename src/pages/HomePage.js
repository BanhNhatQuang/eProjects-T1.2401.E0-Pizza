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
                <h2 className='title'>Khuyến Mãi, Combo</h2>
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
                                <h5><Link to="/" className="card-title">Mua 1 Tặng 1 Pizza Chay Size L</Link></h5>
                                <p className="card-text">Mua 1 Pizza size L, tặng 1 Pizza (Đế Dày/Mỏng) dòng Classic cùng cỡ.</p>
                                <Link to="/" className="btn btn-success">Chỉ từ 169.000</Link>
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
                                <h5><Link to="/" className="card-title">Mua 1 Tặng 1 Pizza Bất Kì Size L</Link></h5>
                                <p className="card-text">Mua 1 Pizza size L, tặng 1 Pizza (Đế Dày/Mỏng) dòng Classic cùng cỡ.</p>
                                <Link to="/" className="btn btn-success">Chỉ từ 309.000</Link>
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
                                <h5><Link to="/" className="card-title">Mua Pizza Khổng Lồ Giảm 50%</Link></h5>
                                <p className="card-text">Giảm 50% cho Pizza size khổng lồ, khẩu phần lớn hơn, tiết kiệm hơn, xịn hơn</p>
                                <Link to="/" className="btn btn-success">Chỉ từ 250.000</Link>
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
                                <h5><Link to="/" className="card-title">Mua 1 Tặng 1 Pizza Size M Siêu Hời</Link></h5>
                                <p className="card-text">Mua 1 Pizza size M, tặng 1 Pizza (Đế Dày/Mỏng) dòng Classic cùng cỡ.</p>
                                <Link to="/" className="btn btn-success">Chỉ Từ 79.000</Link>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="row gx-5 mt-4">
                    <div className="col-12">
                        <h2 className='title'>Thực Đơn</h2>
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
                                <h5><Link to="/" className="card-title">Pizza Tôm Cocktail</Link></h5>
                                <p className="card-text">Tôm với nấm, dứa, cà chua và sốt Thousand Island.</p>
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
                                <h5><Link to="/" className="card-title">Pizza Hải Sản Pesto</Link></h5>
                                <p className="card-text">Tôm, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh</p>
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
                                <h5><Link to="/" className="card-title">Pizza Thịt Xông Khói</Link></h5>
                                <p className="card-text">Thịt giăm bông, thịt xông khói và hai loại rau của ớt xanh, cà chua</p>
                                <Link to="/detail/5" className="btn btn-success">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                <h3 className="title">Khai Vị</h3>
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
                                <h5><Link to="/" className="card-title">Gà Giòn Sốt Hàn Truyền Thống (2 miếng)</Link></h5>
                                <p className="card-text">Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men.</p>
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
                                <h5><Link to="/" className="card-title">Gà Giòn Sốt Hàn Truyền Thống (5 miếng)</Link></h5>
                                <p className="card-text">Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men.</p>
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
                                <h5><Link to="/" className="card-title">Gà Giòn Sốt Hàn Truyền Thống (9 miếng)</Link></h5>
                                <p className="card-text">Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men.</p>
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
                                <h5><Link to="/" className="card-title">Gà Giòn Sốt Tương Tỏi</Link></h5>
                                <p className="card-text">Công thức đặc biệt pha chút vị the nhè nhẹ và mùi thơm của gừng, tỏi.</p>
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
