import React from 'react';
import './MyY.css';

function MyY10(props) {
    return (
        <div>
            <div className='card1'>
                <img className='pic' id='MyY' src='http://thepizzacompany.vn/images/thumbs/000/0002260_spaghetti-veggi-mushroom-cream-sauce_300.png'></img>
                <h2 id='cuoi'>Mỳ Ý Chay Sốt Kem Tươi</h2>
                <div className='des' id='cuoi4'>Mỳ Ý chay thơm ngon với sốt kem và nấm</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>109.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default MyY10;