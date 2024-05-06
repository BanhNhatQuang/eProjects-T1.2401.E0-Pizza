import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card14(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic' onClick={()=>navigate("/detail/14")} id='hinh14' src='http://thepizzacompany.vn/images/thumbs/000/0002225_double-pepperoni_300.png'></img>
                    <h2 id='cuoi'>Pizza Xúc Xích Ý</h2>
                    <div></div>
                    <div id='cuoi' className='des'>Xúc xích cay kiểu Ý trên nền sốt cà chua</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>139.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/14")} className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card14;