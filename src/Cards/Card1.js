import React from 'react';
import './Card.css';
function Card1(props) {
    return (
        <div>
            <div className='card1'>
                    <img className='pic' id='PICTURE' src='http://thepizzacompany.vn/images/thumbs/000/0003102_seafood-peach-test_300.png'></img>
                    <h2 id='cuoi'>Pizza Hải Sản Đào</h2>
                    <div className='des'>Tôm, Đào hoà quyện bùng nổ cùng sốt</div>
                    <div id='cuoi'>Thousand Island</div>
                    <div className='temp'>
                        <div>
                            <div className='gia-chi-tu'>Giá chỉ từ</div>
                            <div className='price'>169.000đ</div>
                        </div>
                        <button className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
    );
}
export default Card1;