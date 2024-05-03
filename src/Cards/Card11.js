import React from 'react';
import './Card.css';

function Card11(props) {
    return (
        <div>
            <div>
            <div className='card1'>
                    <img className='pic'  src='http://thepizzacompany.vn/images/thumbs/000/0002219_meat-deluxe_300.png'></img>
                    <h2 id='cuoi'>Pizza 5 Loại Thịt Đặc Biệt</h2>
                    <div id='cuoi' className='des'>Xúc xích lợn và bò đặc trưng của Ý, giăm bông, thịt xông khói</div >
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

export default Card11;