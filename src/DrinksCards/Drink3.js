import React from 'react';
import './ThucUong.css';

function Drink3(props) {
    return (
        <div className='container1' id='sencond'>
            <div className='card2'>
                <img className='pic' id='MyY2' src='http://thepizzacompany.vn/images/thumbs/000/0002363_7-up-can_300.jpeg'></img>
                <h3 id='cuoi'>7Up Lon</h3>
                <div className='des' id='cuoi'></div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>29.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default Drink3;