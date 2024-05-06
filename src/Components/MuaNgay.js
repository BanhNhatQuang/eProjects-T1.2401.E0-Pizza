import React from 'react';
import './MuaNgay.css'; 
function MuaNgay(props) {
    return (
        <div>
            <div className='temp'>
                <div>
                    <div className='hello'>Giá chỉ từ</div>
                    <div className='price'>119.000đ</div>
                </div>
                <button className='mua-ngay'>Mua ngay</button>
            </div>
        </div>
    );
}

export default MuaNgay;