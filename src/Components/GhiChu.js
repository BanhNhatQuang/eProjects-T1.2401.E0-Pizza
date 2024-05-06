import React from 'react';
import './GhiChu.css'
function GhiChu(props) {
    return (
        <div>
            <h3 className='kich-thuoc'>Ghi Chú</h3>
            <input className='GhiChu' type='text' placeholder='Nhập ghi chú bạn ở đây'></input>
        </div>
    );
}

export default GhiChu;