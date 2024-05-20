import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card13(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card1'>
                    <img className='pic' id='PICTURE' onClick={()=>navigate("/detail/13")} src='http://thepizzacompany.vn/images/thumbs/000/0002228_ck-caldo_300.png'></img>
                    <h2 id='cuoi'>Pineapple Grilled Chicken Pizza</h2>
                    <div id='cuoi' className='des'>Chicken has the sweetness of pineapple combined with the heat of chili</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>139.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/13")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card13;