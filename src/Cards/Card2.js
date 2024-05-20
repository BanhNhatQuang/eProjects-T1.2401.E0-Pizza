import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card2(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card'>
                    <img id='PICTURE' onClick={()=>navigate("/detail/2")} className='pic' src='http://thepizzacompany.vn/images/thumbs/000/0002624_seafood-pesto_300.png'></img>
                    <h2 id='cuoi'>Green Pesto Seafood Pizza</h2>
                    {/* <div></div> */}
                    <div className='des'>Shrimp, crab sticks, squid and fresh broccoli </div>
                    <div className='des' id='cuoi'>Delicious on a base of Green Pesto sauce</div>
                    {/* <div></div> */}
                    <div className='temp'>
                        <div>
                            <div className='gia-chi-tu'>Price</div>
                            <div className='price'>169.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/2")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card2;