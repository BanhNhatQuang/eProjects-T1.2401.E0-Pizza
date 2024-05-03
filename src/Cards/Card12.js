import React from 'react';
import './Card.css';

function Card12(props) {
    return (
        <div>
            <div>
            <div className='card2'>
                    <img className='pic' id='hinh12' src='http://thepizzacompany.vn/images/thumbs/000/0002218_sup-deluxe_300.png'></img>
                    <h2 id='cuoi'>Pizza 5 Loại Thịt Đặc Biệt Và Rau Củ</h2>
                    <div className='des'>Xúc xích bò, giăm bông, thịt xông khói,... <div id='cuoi' className='des'>và cả thế giới rau phong phú</div></div>
                    <div className='temp'>
                        <div>
                            <div className='hello'>Giá chỉ từ</div>
                            <div className='price'>149.000đ</div>
                        </div>
                        <button className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card12;