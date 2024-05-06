import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card18(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic' id='PICTURE' onClick={()=>navigate("/detail/18")} src='http://thepizzacompany.vn/images/thumbs/000/0003785_trufflemushroomsaucebroccoli_300.png'></img>
                    <h2 id='cuoi1'>Pizza Sốt nấm Truffle & Bông cải xanh</h2>
                    <div className='des' id='cuoi1'>Với sự kết hợp từ nấm, bông cải xanh và xốt nấm Truffle thơm béo sẽ tạo nên một hương vị khó quên cho những thực khách thích thanh</div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>119.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/18")} className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card18;