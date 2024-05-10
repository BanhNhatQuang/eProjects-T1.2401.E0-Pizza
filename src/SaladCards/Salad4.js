import React from 'react';
import './Salad.css';

function Salad4(props) {
    return (
        <div className='container1' id='sencond'>
            <div className='card2'>
                <img className='pic' id='MyY1' src='http://thepizzacompany.vn/images/thumbs/000/0002601_crispy-salmon-skin-salad_300.png'></img>
                <h3 id='cuoi'>Salad Da Cá Hồi Giòn</h3>
                <div className='des' id='cuoi3'>Salad với da cá hồi giòn với bắp cải đỏ, cà chua bi, ngô với sốt Yuzu</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>89.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default Salad4;