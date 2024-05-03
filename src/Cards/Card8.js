import React from 'react';
import './Card.css';

function Card8(props) {
    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic' src='http://thepizzacompany.vn/images/thumbs/000/0002221_bacon-sup_300.png'></img>
                    <h2 id='cuoi'>Pizza Thịt Xông Khói</h2>
                    <div className='des' id='cuoi'>Thịt giăm bông, thịt xông khói và hai loại rau của ớt xanh, cà chua</div>
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

export default Card8;