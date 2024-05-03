import './KhaiVi.css';

import React from 'react';

function GaCay9Mieng(props) {
    return (
        <div>
            <div className='card2'>
                <img className='pic' id='Cay3' src='http://thepizzacompany.vn/images/thumbs/000/0003870_bbq-chicken-platter-2pcs_300.jpeg'></img>
                <h2 id='cuoi'>Gà Giòn Xốt Hàn - Cay (9 miếng)</h2>
                <div className='des' id='cuoi'>Phục vụ kèm xốt mù tạc mật ong và củ cải lên men.</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>429.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default GaCay9Mieng;