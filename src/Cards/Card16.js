import React from 'react';
import './Card.css';

function Card16(props) {
    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic-cuoi' id='hinh16' src='http://thepizzacompany.vn/images/thumbs/000/0002224_hawaii_300.png'></img>
                    <h2 id='cuoi'>Pizza Hawaiian</h2>
                    <div className='des' id='cuoi'>Giăm bông, thịt muối và dứa</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>139.000đ</div>
                        </div>
                        <button className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card16;