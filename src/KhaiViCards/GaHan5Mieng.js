import './KhaiVi.css';

import React from 'react';

function GaHan5Mieng(props) {
    return (
        <div>
            <div>
            <div className='card2'>
                <img className='pic' id='PICTURE' src='http://thepizzacompany.vn/images/thumbs/000/0003949_crispy-chicken-with-k-sauce2pcs_300.png'></img>
                <h2 id='cuoi'>Gà Giòn Xốt Hàn - Truyền Thống (5 miếng)</h2>
                <div className='des' id='cuoi'>Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>249.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default GaHan5Mieng;