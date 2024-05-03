import React from 'react';
import './Card.css';

function Card10() {
    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic-cuoi' id='hinh10' src='http://thepizzacompany.vn/images/thumbs/000/0002223_ck-trio_300.png'></img>
                    <h2 id='cuoi'>Pizza Gà Nướng 3 Vị</h2>
                    <div className='des' id='cuoi'>Gà nướng, gà bơ tỏi và gà ướp sốt nấm</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>149.000đ</div>
                        </div>
                        <button className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card10;