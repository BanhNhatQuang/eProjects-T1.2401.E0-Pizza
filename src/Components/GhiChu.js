import React from 'react';
import './GhiChu.css'
function GhiChu(props) {
    return (
        <div>
            <h3 className='kich-thuoc'>Note</h3>
            <input className='GhiChu' type='text' placeholder='Enter your note here'></input>
        </div>
    );
}

export default GhiChu;