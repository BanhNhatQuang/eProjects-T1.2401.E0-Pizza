import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card17(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card'>
                    <img className='pic' id='PICTURE' onClick={()=>navigate("/detail/17")} src='http://thepizzacompany.vn/images/thumbs/000/0002226_double-cheese_300.png'></img>
                    <h2 id='cuoi'>Cheese Pizza</h2>
                    <div className='des'>Pizza with lots of cheese for <div className='des' id='cuoi'>you to enjoy</div> </div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>119.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/17")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card17;