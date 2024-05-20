import React from 'react';
import './MuaNgay.css'; 
function MuaNgay(props) {
    return (
        <div>
            <div className='temp'>
                <div>
                    <div className='hello'>From</div>
                    <div className='price'>119.000đ</div>
                </div>
                <button className='mua-ngay'>Buy Now</button>
            </div>
        </div>
    );
}

export default MuaNgay;