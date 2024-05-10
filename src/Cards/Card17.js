import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card17(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card1'>
                    <img className='pic' id='PICTURE' onClick={()=>navigate("/detail/17")} src='http://thepizzacompany.vn/images/thumbs/000/0002226_double-cheese_300.png'></img>
                    <h2 id='cuoi'>Pizza Phô Mai</h2>
                    <div className='des'>Bánh Pizza với vô vàn phô mai để bạn tha <div className='des' id='cuoi'>hồ tận hưởng</div> </div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>119.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/17")} className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card17;