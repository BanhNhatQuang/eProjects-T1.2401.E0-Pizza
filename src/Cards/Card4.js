import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card4(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card2'>
                    <img id='PICTURE' onClick={()=>navigate("/detail/4")} className='pic' src='http://thepizzacompany.vn/images/thumbs/000/0002214_sf-deluxe_300.png'></img>
                    <h2 id='cuoi'>Pizza Hải Sản Cao Cấp</h2>
                    <div className='des'>Tôm, cua, mực và nghêu với sốt</div>
                    <div className='des' id='cuoi'>Marinara</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>159.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/4")} className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card4;