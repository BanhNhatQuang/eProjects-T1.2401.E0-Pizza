import React from 'react';
import './Card.css';

function Card19(props) {
    return (
        <div>
            <div>
                <div className='card2'>
                    <img className='pic' id='PICTURE' src='http://thepizzacompany.vn/images/thumbs/000/0002229_veg_300.png'></img>
                    <h2 id='cuoi'>Pizza Rau Củ</h2>
                    <div className='des' id='cuoi'>Hành, ớt chuông, nấm, dứa, cà chua</div>
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

export default Card19;