import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card12(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic' id='hinh12' onClick={()=>navigate("/detail/12")} src='http://thepizzacompany.vn/images/thumbs/000/0002218_sup-deluxe_300.png'></img>
                    <h2 >Five Meat Feast And Vegetables <h2 id='cuoi'>Special Pizza</h2></h2>
                    <div className='des'>Xúc xích bò, giăm bông, thịt xông khói,... <div id='cuoi' className='des'>và cả thế giới rau phong phú</div></div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>149.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/12")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card12;