import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card8(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card'>
                    <img id='PICTURE' onClick={()=>navigate("/detail/8")} className='pic' src='http://thepizzacompany.vn/images/thumbs/000/0002221_bacon-sup_300.png'></img>
                    <h2 id='cuoi'>Bacon Pizza</h2>
                    <div className='des' id='cuoi'>Ham, bacon and two vegetables of green peppers, tomatoes</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>149.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/8")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card8;