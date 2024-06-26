import React from 'react';
import ThemVaoGioHang from '../Components/ThemVaoGioHang';

function DetailKhaiVi6(props) {
    return (
        <div className='DetailBox'>
            <div className='DetailBox1'>
                <img className='DetailPic' src='http://thepizzacompany.vn/images/thumbs/000/0003870_bbq-chicken-platter-2pcs_300.jpeg'></img>
                <h2 className='DetailPrice'>429.000đ</h2>
            </div>
            <div className='DetailBox2'>
                <div className='Box2'>
                    <div className='price'>___</div>
                    <h2>Crispy Chicken with Korean Sauce - Spicy (9 pieces)</h2>
                    {/* <div className='kich-thuoc'>Kích thước Nhỏ 6” - Đế Dày</div> */}
                    <div>Served with honey mustard sauce and fermented radish.</div>
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
                <h3 className='kich-thuoc'>Note</h3>
                    <input className='GhiChu' type='text' placeholder='Enter your note here'></input>
                    {/* <GhiChu></GhiChu> */}
                    <ThemVaoGioHang></ThemVaoGioHang>
                </div>
            </div>
        </div>
    );
}

export default DetailKhaiVi6;