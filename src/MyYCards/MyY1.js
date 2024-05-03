import React from 'react';
import './MyY.css';

function MyY1(props) {
    return (
        <div>
            <div className='card1'>
                <img className='pic' id='My1' src='http://thepizzacompany.vn/images/thumbs/000/0004006_abalone-fettuccine-w-spicy-seafood-sauce_300.png'></img>
                <h2 id='cuoi' >Mỳ Sợi Dẹt Bào Ngư Xốt Hải Sản Cay</h2>
                <div className='des' id='cuoi'></div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp' id='Nood1'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>169.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default MyY1;