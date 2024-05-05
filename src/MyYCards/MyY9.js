import React from 'react';
import './MyY.css';

function MyY9(props) {
    return (
        <div>
            <div className='card1'>
                <img className='pic' id='MyY' src='http://thepizzacompany.vn/images/thumbs/000/0002258_spaghetti-bolognese_300.png'></img>
                <h2 id='cuoi'>Mỳ Ý thịt bò bằm</h2>
                <div className='des' id='cuoi'>Sốt thịt bò bằm đặc trưng kết hợp cùng mỳ Ý</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>139.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default MyY9;