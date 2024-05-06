import React from 'react';
import ThemVaoGioHang from '../Components/ThemVaoGioHang';

function DetailKhaiVi11(props) {
    return (
        <div className='DetailBox'>
            <div className='DetailBox1'>
                <img className='DetailPic' src='http://thepizzacompany.vn/images/thumbs/000/0003952_crispy-chicken-with-sg-sauce2pcs_300.png'></img>
                <h2 className='DetailPrice'>249.000đ</h2>
            </div>
            <div className='DetailBox2'>
                <div className='Box2'>
                    <div className='price'>___</div>
                    <h2>Gà Giòn Xốt Tương Tỏi Hàn Quốc (5 miếng)</h2>
                    {/* <div className='kich-thuoc'>Kích thước Nhỏ 6” - Đế Dày</div> */}
                    <div>Công thức đặc biệt pha chút vị the nhè nhẹ và mùi thơm của gừng, tỏi mang đến cảm giác mới lạ khi thưởng thức.</div>
                    {/* <br></br> */}
                    {/* <h3 className='kich-thuoc'>Kích Thước</h3>
                        <button onClick={handleClickBtn1} className={id == 0 ? 'btn' : 'btn1'}>Nhỏ 6"</button>
                        <button onClick={handleClickBtn2} className={id == 1 ? 'btn' : 'btn1'}>Vừa 9"</button>
                        <button onClick={handleClickBtn3} className={id == 2 ? 'btn' : 'btn1'}>Lớn 12"</button>
                        <div className='dash'>___________________________________________________</div>
                        <h3 className='kich-thuoc'>Đế</h3>
                        <input type="radio" name="status" checked></input>
                        <label>Dày</label>
                        <div className='dash'>___________________________________________________</div>
                        <br></br> */}
                  <h3 className='kich-thuoc'>Ghi Chú</h3>
                    <input className='GhiChu' type='text' placeholder='Nhập ghi chú bạn ở đây'></input>
                    {/* <GhiChu></GhiChu> */}
                    <ThemVaoGioHang></ThemVaoGioHang>
                </div>
            </div>
        </div>
    );
}

export default DetailKhaiVi11;