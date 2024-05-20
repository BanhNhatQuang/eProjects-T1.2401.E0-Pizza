import React, { useState } from 'react';
import './DetailPizza.css'
import ThemVaoGioHang from '../Components/ThemVaoGioHang';
function DetailCard2() {
    function handleClickBtn1(params) {
        setID(0)
    }
    function handleClickBtn2(params) {
        setID(1)
    }
    function handleClickBtn3(params) {
        setID(2)
    }
    const [id, setID] = useState(0)
    return (
        <div>
            {/* <h1>Hello</h1> */}
            <div className='DetailBox'>
                    <div className='DetailBox1'>
                        <img className='DetailPic' src='http://thepizzacompany.vn/images/thumbs/000/0002624_seafood-pesto_300.png'></img>
                        <h2 className='DetailPrice'>169.000đ</h2>
                    </div>
                    <div className='DetailBox2'>
                        <div className='Box2'>
                            <div className='price'>___</div>
                            <h2>Pizza Hải Sản Pesto Xanh</h2>
                            <div className='kich-thuoc'>Kích thước Nhỏ 6” - Đế Dày</div>   
                            <div>Tôm, thanh cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh</div>
                            <br></br>
                            <h3 className='kich-thuoc'>Kích Thước</h3>
                            <button onClick={handleClickBtn1} className={id == 0 ? 'btn0' : 'btn1'}>Nhỏ 6"</button>
                            <button onClick={handleClickBtn2} className={id == 1 ? 'btn0' : 'btn1'}>Vừa 9"</button>
                            <button onClick={handleClickBtn3} className={id == 2 ? 'btn0' : 'btn1'}>Lớn 12"</button>
                            <div className='dash'>_____________________________________________</div>
                            <h3 className='kich-thuoc'>Đế</h3>
                            <input type="radio" name="status" checked></input>
                            <label>Dày</label>
                            <div className='dash'>_____________________________________________</div>
                            <br></br>
                            <h3 className='kich-thuoc'>Ghi Chú</h3>
                            <input type='text' placeholder='Nhập ghi chú bạn ở đây'></input>
                    {/* <ThemVaoGioHang></ThemVaoGioHang> */}
                    <div className='last'>
                            <ThemVaoGioHang></ThemVaoGioHang>
                        </div>

                        </div>
                    </div>
                </div>
        </div>
    );
}

export default DetailCard2;