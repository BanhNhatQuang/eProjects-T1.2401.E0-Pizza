import React from 'react';
import './Card.css';

function Card17(props) {
    return (
        <div>
            <div>
            <div className='card1'>
                    <img className='pic' src='http://thepizzacompany.vn/images/thumbs/000/0002226_double-cheese_300.png'></img>
                    <h2 id='cuoi'>Pizza Phô Mai</h2>
                    <div className='des' id='cuoi'>Bánh Pizza với vô vàn phô mai để bạn tha hồ tận hưởng</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>119.000đ</div>
                        </div>
                        <button className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card17;