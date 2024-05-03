import React from 'react';
import './Card.css';

function Card5(props) {
    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic' src='http://thepizzacompany.vn/images/thumbs/000/0002211_tropical-sf-test_300.png'></img>
                    <h2 id='cuoi'>Pizza Hải Sản Nhiệt Đới</h2>
                    <div className='des'>Tôm, nghêu, mực cua, dứa với sốt Thousand <div id='cuoi' className='des'>Island</div> </div>
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

export default Card5;