import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card11(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card'>
                    <img className='pic' id='PICTURE' onClick={()=>navigate("/detail/11")} src='http://thepizzacompany.vn/images/thumbs/000/0002219_meat-deluxe_300.png'></img>
                    <h2>Five Meat Feast <h2 id='cuoi'>Special Pizza</h2></h2>
                    <div className='des'>Typical Italian pork and beef sausages, ham, <div  id='cuoi' className='des'>bacon</div></div >
                    <div className='temp'>
                        <div>
                            <div className='hello'>Price</div>
                            <div className='price'>149.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/11")} className='mua-ngay'>Buy now</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card11;