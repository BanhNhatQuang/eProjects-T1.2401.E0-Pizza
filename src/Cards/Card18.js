import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card18(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div>
            <div className='card'>
                    <img className='pic' id='PICTURE' onClick={()=>navigate("/detail/18")} src='http://thepizzacompany.vn/images/thumbs/000/0003785_trufflemushroomsaucebroccoli_300.png'></img>
                    <h2 id='cuoi1'>Pizza with Truffle Sauce & Broccoli</h2>
                    <div className='des' id='cuoi1'>With a combination of mushrooms, broccoli and fragrant Truffle mushroom sauce.</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>119.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/18")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card18;