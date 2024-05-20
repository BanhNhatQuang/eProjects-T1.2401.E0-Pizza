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
                            <h2>Green Pesto Seafood Pizza</h2>
                            <div className='kich-thuoc'>Small size 6" with thick base</div>    

                            <div>Fresh shrimp, crab sticks, squid and broccoli on a base of Green Pesto sauce</div>
                            <br></br>
                            <h3 className='kich-thuoc'>Size</h3>
                        <button onClick={handleClickBtn1} className={id==0 ? 'btn0':'btn1'}>Small 6"</button>
                        <button onClick={handleClickBtn2} className={id==1 ? 'btn0':'btn1'}>Medium 9"</button>
                        <button onClick={handleClickBtn3} className={id==2 ? 'btn0':'btn1'}>Large 12"</button>
                        <div className='dash'>_____________________________________________</div>
                        <h3 className='kich-thuoc'>Base</h3>
                        <input type="radio" name="status" checked></input>
                        <label>Thick</label>
                        <div className='dash'>_____________________________________________</div>
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
    );
}

export default DetailCard2;