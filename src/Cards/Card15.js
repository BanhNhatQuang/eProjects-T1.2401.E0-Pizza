import React from 'react';
import './Card.css';

function Card15(props) {
    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic' id='hinh15' src='http://thepizzacompany.vn/images/thumbs/000/0002227_h-m_300.png'></img>
                    <h2 id='cuoi'>Pizza Thịt Nguội & Nấm</h2>
                    <div className='des' id='cuoi'>Pizza giăm bông và nấm đem đến cho bạn những trải nghiệm thú vị</div>
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

export default Card15;