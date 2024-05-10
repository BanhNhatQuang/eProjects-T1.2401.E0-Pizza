import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
function Card1(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className='card1'>
                    <img className='pic' id='PICTURE' onClick={()=>navigate("/detail/1")} src='http://thepizzacompany.vn/images/thumbs/000/0003102_seafood-peach-test_300.png'></img>
                    <h2 id='cuoi'>Pizza Hải Sản Đào</h2>
                    <div className='des'>Tôm, Đào hoà quyện bùng nổ cùng sốt</div>
                    <div className='des' id='cuoi'>Thousand Island</div>
                    {/* <div> </div> */}
                    {/* <br></br> */}
                    <div className='temp'>
                        <div>
                            <div className='gia-chi-tu'>Giá chỉ từ</div>
                            <div className='price'>169.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detail/1")} className='mua-ngay'>Mua ngay</button>
                        {/* <Link className='mua-ngay' to={`/product/detail/1`}>Mua ngay</Link> */}
                    </div>
                </div>
        </div>
    );
}
export default Card1;