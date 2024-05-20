import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card9(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card'>
                    <img className='pic' onClick={()=>navigate("/detail/9")} id='hinh9' src='http://thepizzacompany.vn/images/thumbs/000/0002222_ca-bacon_300.png'></img>
                    <h2 id='cuoi'>Canadian Style Bacon Pizza</h2>
                    <div className='des' id='cuoi2'>Combination of ham and sweet corn</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>149.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/9")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card9;