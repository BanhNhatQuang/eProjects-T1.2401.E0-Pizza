import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card6(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card'>
                    <img id='PICTURE' onClick={()=>navigate("/detail/6")} className='pic' src='http://thepizzacompany.vn/images/thumbs/000/0002216_shrimp-ctl-test_300.png'></img>
                    <h2 id='cuoi'>Cocktail Shrimp Pizza</h2>
                    <div className='des'>Shrimp with mushrooms, pineapple, tomatoes and Thousand Island sauce<div id='cuoi' className='des'></div> </div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>159.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/6")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card6;