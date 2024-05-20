import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card19(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div className='card2'>
                    <img className='pic' id='PICTURE' onClick={()=>navigate("/detail/19")} src='http://thepizzacompany.vn/images/thumbs/000/0002229_veg_300.png'></img>
                    <h2 id='cuoi'>Vegetables Pizza</h2>
                    <div className='des' id='cuoi3'>Onions, bell peppers, mushrooms, pineapple, tomatoes</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>119.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/19")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card19;