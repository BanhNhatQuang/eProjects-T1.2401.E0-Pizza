import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card16(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic-cuoi' onClick={()=>navigate("/detail/16")} id='hinh16' src='http://thepizzacompany.vn/images/thumbs/000/0002224_hawaii_300.png'></img>
                    <h2 id='cuoi1'>Pizza Hawaiian</h2>
                    <div className='des' id='cuoi3'>Ham, bacon and pineapple</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>139.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/16")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card16;