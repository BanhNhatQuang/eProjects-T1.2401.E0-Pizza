import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card15(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic' onClick={()=>navigate("/detail/15")} id='hinh15' src='http://thepizzacompany.vn/images/thumbs/000/0002227_h-m_300.png'></img>
                    <h2 id='cuoi'>Ham & Mushroom Pizza</h2>
                    <div className='des' id='cuoi'>Ham and mushroom pizza brings you interesting experiences</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>139.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/15")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card15;