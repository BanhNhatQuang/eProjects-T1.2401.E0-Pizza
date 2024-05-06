import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card6(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card2'>
                    <img id='PICTURE' onClick={()=>navigate("/detail/6")} className='pic' src='http://thepizzacompany.vn/images/thumbs/000/0002216_shrimp-ctl-test_300.png'></img>
                    <h2 id='cuoi'>Pizza Tôm Cocktail</h2>
                    <div className='des'>Tôm với nấm, dứa, cà chua và sốt Thousand <div id='cuoi' className='des'>Island</div> </div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>159.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/6")} className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card6;