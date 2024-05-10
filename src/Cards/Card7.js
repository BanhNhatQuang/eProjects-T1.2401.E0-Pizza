import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card7(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card1'>
                    <img className='pic' onClick={()=>navigate("/detail/7")} id='hinh8' src='http://thepizzacompany.vn/images/thumbs/000/0003536_aloha_300.png'></img>
                    <h2 id='cuoi1'>Pizza Aloha</h2>
                    <div id='cuoi' className='des'>Thịt nguội, xúc xích tiêu cay và dứa hòa quyện với sốt Thousand Island</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>149.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/7")} className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card7;