import React from 'react';
import './MyY.css';

function MyY6(props) {
    return (
        <div>
            <div className='card2'>
                <img className='pic' src='http://thepizzacompany.vn/images/thumbs/000/0002257_spaghetti-shrimp-rose_300.png'></img>
                <h2 id='cuoi'>Mỳ Ý Tôm Sốt Kem Cà Chua</h2>
                <div className='des' id='cuoi'>Sự tươi ngon của tôm kết hợp với sốt kem cà chua</div>
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

export default MyY6;