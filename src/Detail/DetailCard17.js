import React, { useState } from 'react';
import './DetailPizza.css'
import ThemVaoGioHang from '../Components/ThemVaoGioHang';
function DetailCard17(props) {
    function handleClickBtn1(params) {
        setID(0)
        // console.log(id);
    }
    function handleClickBtn2(params) {
        setID(1)
        // console.log(id);
    }
    function handleClickBtn3(params) {
        setID(2)
        // console.log(id);
    }
    const [id, setID] = useState(0)
    // let id = 0;
    // console.log(id);
    return (
        <div>
            {/* <h1>Hello</h1> */}
            <div className='DetailBox'>
                <div className='DetailBox1'>
                    <img className='DetailPic' src='http://thepizzacompany.vn/images/thumbs/000/0002226_double-cheese_300.png'></img>
                    <h2 className='DetailPrice'>119.000đ</h2>
                </div>
                <div className='DetailBox2'>
                    <div className='Box2'>
                        <div className='price'>___</div>
                        <h2>Pizza Phô Mai</h2>
                        <div className='kich-thuoc'>Kích thước Nhỏ 6” - Đế Dày</div>
                        <div>Bánh Pizza với vô vàn phô mai để bạn tha hồ tận hưởng</div>
                        {/* <br></br> */}
                        <h3 className='kich-thuoc'>Kích Thước</h3>
                        <button onClick={handleClickBtn1} className={id==0 ? 'btn':'btn1'}>Nhỏ 6"</button>
                        <button onClick={handleClickBtn2} className={id==1 ? 'btn':'btn1'}>Vừa 9"</button>
                        <button onClick={handleClickBtn3} className={id==2 ? 'btn':'btn1'}>Lớn 12"</button>
                        <div className='dash'>___________________________________________________</div>
                        <h3 className='kich-thuoc'>Đế</h3>
                        <input type="radio" name="status" checked></input>
                        <label>Dày</label>
                        <div className='dash'>___________________________________________________</div>
                        {/* <br></br> */}
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
export default DetailCard17;