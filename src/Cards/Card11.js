import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card11(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <div className='card1'>
                    <img className='pic' id='PICTURE' onClick={()=>navigate("/detail/11")} src='http://thepizzacompany.vn/images/thumbs/000/0002219_meat-deluxe_300.png'></img>
                    <h2>Pizza 5 Loại Thịt <h2 id='cuoi'>Đặc Biệt</h2></h2>
                    <div className='des'>Xúc xích lợn và bò đặc trưng của Ý, giăm bông, <div  id='cuoi' className='des'>thịt xông khói</div></div >
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>149.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/11")} className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card11;