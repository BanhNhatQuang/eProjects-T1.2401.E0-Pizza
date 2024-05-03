import React from 'react';
import './Card.css';

function Card9(props) {
    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic' id='hinh9' src='http://thepizzacompany.vn/images/thumbs/000/0002222_ca-bacon_300.png'></img>
                    <h2 id='cuoi'>Pizza Thịt Nguội Kiểu Canada</h2>
                    <div className='des' id='cuoi'>Sự kết hợp giữa thịt nguội và bắp ngọt</div>
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

export default Card9;