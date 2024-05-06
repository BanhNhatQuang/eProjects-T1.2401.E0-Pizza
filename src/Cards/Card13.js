import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card13(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card1'>
                    <img className='pic' id='PICTURE' onClick={()=>navigate("/detail/13")} src='http://thepizzacompany.vn/images/thumbs/000/0002228_ck-caldo_300.png'></img>
                    <h2 id='cuoi'>Pizza Gà Nướng Dứa</h2>
                    <div id='cuoi' className='des'>Thịt gà mang vị ngọt của dứa kết hợp với vị cay nóng của ớt</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>139.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/13")} className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card13;