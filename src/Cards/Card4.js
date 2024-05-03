import React from 'react';
import './Card.css';

function Card4(props) {
    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic' src='http://thepizzacompany.vn/images/thumbs/000/0002214_sf-deluxe_300.png'></img>
                    <h2 id='cuoi'>Pizza Hải Sản Cao Cấp</h2>
                    <p id='cuoi' className='des'>Tôm, cua, mực và nghêu với sốt Marinara</p>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>159.000đ</div>
                        </div>
                        <button className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card4;