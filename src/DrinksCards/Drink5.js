import React from 'react';
import './ThucUong.css';

function Drink5(props) {
    return (
        <div className='container1' id='first'>
            <div className='card2'>
                <img className='pic' id='MyY2' src='http://thepizzacompany.vn/images/thumbs/000/0002436_heineken_300.png'></img>
                <h3 id='cuoi'>Bia Heineken</h3>
                <div className='des' id='cuoi'></div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>49.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default Drink5;