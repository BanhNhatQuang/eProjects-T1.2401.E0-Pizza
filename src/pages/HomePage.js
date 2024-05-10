import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import { Route, Routes, Router, Link } from 'react-router-dom';
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
      <div className="container-fluid" style={{ padding: '2rem' }}>
        <h2 className='title'>Khuyến Mãi, Combo</h2>
        {/* Row 1 */}
        <div className="row mb-4 justify-content-between">
          <div className="col-md-3 text-start mb-4">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0003962_bogo-m-chay_300.jpeg"
                className="card-img-top"
                alt="Card"
                style={{ maxWidth: '90%' }}
              />
              <div className="card-body">
                <h5 className="card-title">Mua 1 Tặng 1 Pizza Chay Size L</h5>
                <p className="card-text">
                  Mua 1 Pizza size L, tặng 1 Pizza (Đế Dày/Mỏng) dòng Classic cùng cỡ.
                </p>
                <Link to="/" className="btn btn-success">Chỉ từ 169.000</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0003929_hde-discount-50-pizza-2_300.jpeg"
                className="card-img-top"
                alt="Card"
                style={{ maxWidth: '90%' }}
              />
              <div className="card-body">
                <h5 className="card-title">Mua 1 Tặng 1 Pizza Bất Kì Size L</h5>
                <p className="card-text">
                  Mua 1 Pizza size L, tặng 1 Pizza (Đế Dày/Mỏng) dòng Classic cùng cỡ.
                </p>
                <Link to="/" className="btn btn-success">Chỉ từ 309.000</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0003878_pizza-new-york_500.jpeg"
                className="card-img-top"
                alt="Card"
                style={{ maxWidth: '90%' }}
              />
              <div className="card-body">
                <h5 className="card-title">Mua Pizza Khổng Lồ Giảm 50%</h5>
                <p className="card-text">
                  Giảm 50% cho Pizza size khổng lồ, khẩu phần lớn hơn, tiết kiệm hơn
                </p>
                <Link to="/" className="btn btn-success">Chỉ từ 250.000</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0003929_hde-discount-50-pizza-2_300 (1).jpeg"
                className="card-img-top"
                alt="Card"
                style={{ maxWidth: '90%' }}
              />
              <div className="card-body">
                <h5 className="card-title">Mua 1 Tặng 1 Pizza Size M Siêu Hời</h5>
                <p className="card-text">
                  Mua 1 Pizza size M, tặng 1 Pizza (Đế Dày/Mỏng) dòng Classic cùng cỡ.
                </p>
                <Link to="/" className="btn btn-success">Chỉ Từ 79.000</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-start">
          {/* Tiêu Đề "Thực Đơn" */}
          <h2 className='title'>Thực Đơn</h2>
          <hr style={{ width: '20%', border: '1px solid #00a859' }} />


          <h3>Pizza</h3>


          <div className="row mb-4">
            <div className="col-md-3">
              <div className="card" style={{ width: '18rem' }}>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0002212_sf-cocktail-test_300.png"
                className="card-img-top"
                alt="Card"
              />
              <div className="card-body">
                <h5 className="card-title">Pizza Hải Sản Đào</h5>
                <p className="card-text">
                  Tôm, đào hòa quyện bùng nổ cùng sốt Thounsand Island
                </p>
                <Link to="/" className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0002216_shrimp-ctl-test_300.png"
                className="card-img-top"
                alt="Card"
              />
              <div className="card-body">
                <h5 className="card-title">Pizza Tôm Cocktail</h5>
                <p className="card-text">
                  Tôm với nấm, dứa, cà chua và sốt Thousand Island.
                </p>
                <Link to="/" className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/haisanpesto.png"
                className="card-img-top"
                alt="Card"
              />
              <div className="card-body">
                <h5 className="card-title">Pizza Hải Sản Pesto</h5>
                <p className="card-text">
                  Tôm, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh
                </p>
                <Link to="/" className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/thitxongkhoi.png"
                className="card-img-top"
                alt="Card"
              />
              <div className="card-body">
                <h5 className="card-title">Pizza Thịt Xông Khói</h5>
                <p className="card-text">
                  Thịt giăm bông, thịt xông khói và hai loại rau của ớt xanh, cà chua
                </p>
                <Link to="/" className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Row 3 */}
        <h3 className="title">Khai Vị</h3>
        <div className="row mb-4">
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0003949_crispy-chicken-with-k-sauce2pcs_300.png"
                className="card-img-top"
                alt="Card"
              />
              <div className="card-body">
                <h5 className="card-title">Gà Giòn Xốt Hàn (2 Miếng)</h5>
                <p className="card-text">
                  Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men.
                </p>
                <Link to="/" className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0003950_crispy-chicken-with-k-sauce5pcs_300 (1).png"
                className="card-img-top"
                alt="Card"
              />
              <div className="card-body">
                <h5 className="card-title">Gà Giòn Xốt Hàn (5 Miếng)</h5>
                <p className="card-text">
                  Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men.
                </p>
                <Link to="/" className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0003951_crispy-chicken-with-k-sauce9pcs_300.png"
                className="card-img-top"
                alt="Card"
              />
              <div className="card-body">
                <h5 className="card-title">Gà Giòn Xốt Hàn (9 Miếng)</h5>
                <p className="card-text">
                  Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men.
                </p>
                <Link to="/" className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0003952_crispy-chicken-with-sg-sauce2pcs_300.png"
                className="card-img-top"
                alt="Card"
              />
              <div className="card-body">
                <h5 className="card-title">Gà Giòn Xốt Tương Tỏi</h5>
                <p className="card-text">
                  Công thức đặc biệt pha chút vị the nhè nhẹ và mùi thơm của gừng, tỏi.
                </p>
                <Link to="/" className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <h3 className="title">Mì Ý</h3>
        <div className="row mb-4">
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0002253_spaghetti-spicy-seafood_300.png"
                className="card-img-top"
                alt="Card"
                style={{ maxWidth: '90%' }}
              />
              <div className="card-body">
                <h5 className="card-title">Mì Ý Hải Sản</h5>
                <p className="card-text">
                  Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và tỏi
                </p>
                <Link to="/" className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0002254_spicy-sausage-spaghetti_300.png"
                className="card-img-top"
                alt="Card"
                style={{ maxWidth: '90%' }}
              />
              <div className="card-body">
                <h5 className="card-title">Mì Ý Xúc Xích</h5>
                <p className="card-text">
                  Mỳ Ý rán với các loại xúc xích cùng ớt và tỏi
                </p>
                <Link to="/" className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0002257_spaghetti-shrimp-rose_300.png"
                className="card-img-top"
                alt="Card"
                style={{ maxWidth: '90%' }}
              />
              <div className="card-body">
                <h5 className="card-title">Mì Ý Tôm</h5>
                <p className="card-text">
                  Sự tươi ngon của tôm kết hợp với sốt kem cà chua
                </p>
                <Link to="/" className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-start">
            <div className="card" style={{ width: '18rem' }}> {/* Sử dụng đối tượng cho style */}
              <img
                src="/hinhanh/0002258_spaghetti-bolognese_300.png"
                className="card-img-top"
                alt="Card"
                style={{ maxWidth: '90%' }}
              />
              <div className="card-body">
                <h5 className="card-title">Mì Ý Bò Bằm</h5>
                <h3>ok lah</h3>
                <p className="card-text">
                  Sốt thịt bò bằm đặc trưng kết hợp cùng mỳ Ý
                </p>
                <Link to="/" className="btn btn-success">Mua Ngay</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;