import React from 'react';
import './MyY.css';

function MyY4(props) {
    return (
        <div>
            <div className='card2'>
                <img className='pic' id='My4' src='http://thepizzacompany.vn/images/thumbs/000/0002253_spaghetti-spicy-seafood_300.png'></img>
                <h2 id='cuoi'>Mỳ Ý Cay Hải Sản</h2>
                <div className='des' id='cuoi'>Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và tỏi</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>139.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default MyY4;