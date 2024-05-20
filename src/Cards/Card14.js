import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card14(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card'>
                    <img className='pic' onClick={()=>navigate("/detail/14")} id='hinh14' src='http://thepizzacompany.vn/images/thumbs/000/0002225_double-pepperoni_300.png'></img>
                    <h2 id='cuoi1'>Italian Sausage Pizza</h2>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>139.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/14")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card14;