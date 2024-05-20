import React, { useState } from 'react';
import './DetailSalad.css'
import ThemVaoGioHang from '../Components/ThemVaoGioHang';
function DetailSalad4(props) {
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
    const [id, setID] = useState(1)
    return (
        // <div>
            <div>
            {/* <h1>Hello</h1> */}
            <div className='DetailBox'>
                <div className='DetailBox1'>
                    <img className='DetailPic' src='http://thepizzacompany.vn/images/thumbs/000/0002252_garden-salad_300.png'></img>
                    <h2 className='DetailPrice'>79.000đ</h2>
                </div>
                <div className='DetailBox2'>
                    <div className='Box2'>
                        <div className='price'>___</div>
                        <h2>Salad with salmon's skin</h2>
                        <div className='kich-thuoc'>Medium size of 9”</div>

                        <div>Fat of salmon's skin mix with vegetable</div>
                        {/* <br></br> */}
                        <h3 className='kich-thuoc'>Kích Thước</h3>
                        {/* <button onClick={handleClickBtn1} className={id == 0 ? 'btn' : 'btn1'}>Nhỏ 6"</button> */}
                        <button onClick={handleClickBtn2} className={id == 1 ? 'btn' : 'btn1'}>Medium 9"</button>
                        <button onClick={handleClickBtn3} className={id == 2 ? 'btn' : 'btn1'}>Large 12"</button>
                        {/* <div className='dash'>___________________________________________________</div> */}
                        {/* <h3 className='kich-thuoc'>Đế</h3>
                        <input type="radio" name="status" checked></input> */}
                        {/* <label>Dày</label> */}
                        <div className='dash'>___________________________________________________</div>
                        {/* <br></br> */}
                        <h3 className='kich-thuoc'>Note</h3>
                        <input type='text' placeholder='Enter your note here'></input>
                        {/* <ThemVaoGioHang></ThemVaoGioHang> */}
                        <div className='last'>
                            <ThemVaoGioHang></ThemVaoGioHang>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default DetailSalad4;