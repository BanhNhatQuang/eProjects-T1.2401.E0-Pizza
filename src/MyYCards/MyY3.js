import React from 'react';
import './MyY.css';

function MyY3(props) {
    return (
        <div>
            <div className='card2'>
                <img className='pic' id='My3' src='http://thepizzacompany.vn/images/thumbs/000/0003669_pasta-seafood-w-pesto-sauce_300.png'></img>
                <h2 id='cuoi'>Mỳ Ý Pesto</h2>
                <div className='des' id='cuoi'>Các loại nguyên liệu hải sản hảo hạng: Tôm, mực hoà quyện trên nền sốt Pesto xanh đậm vị, thơm hương đặc trưng từ lá húng tây </div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>149.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default MyY3;