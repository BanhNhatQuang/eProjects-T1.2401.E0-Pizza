import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card10() {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card'>
                    <img className='pic-cuoi' onClick={()=>navigate("/detail/10")} id='hinh10' src='http://thepizzacompany.vn/images/thumbs/000/0002223_ck-trio_300.png'></img>
                    <h2 id='cuoi'>Chicken Grilled Pizza</h2>
                    <div className='des' id='cuoi2'>Grilled chicken,...</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>149.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/10")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card10;