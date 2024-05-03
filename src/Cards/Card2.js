import React from 'react';
import './Card.css';

function Card2(props) {
    return (
        <div>
            <div>
            <div className='card2'>
                    <img id='PICTURE' className='pic-cuoi' src='http://thepizzacompany.vn/images/thumbs/000/0002624_seafood-pesto_300.png'></img>
                    <h2 id='cuoi'>Pizza Hải Sản Pesto Xanh</h2>
                    {/* <div></div> */}
                    <div className='des'>Tôm, thanh cua, mực và bông cải xanh tươi </div>
                    <div className='des' id='cuoi'>ngon trên nền sốt Pesto Xanh</div>
                    {/* <div></div> */}
                    <div className='temp'>
                        <div>
                            <div className='gia-chi-tu'>Giá chỉ từ</div>
                            <div className='price'>169.000đ</div>
                        </div>
                        <button className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Card2;