import React from 'react';
import './MyY.css';

function MyY5(props) {
    return (
        <div>
            <div className='card1'>
                <img className='pic' id='My5' src='http://thepizzacompany.vn/images/thumbs/000/0003135_spaghetti-vegetarian-w-marinara-sauce_300.png'></img>
                <h2 id='cuoi'>Mỳ Ý Chay Sốt Marinara</h2>
                <div className='des' id='cuoi'>Mỳ Ý áp chảo với sốt Marinara, nấm và cà chua đỏ</div>
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

export default MyY5;