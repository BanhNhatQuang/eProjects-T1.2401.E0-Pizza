import React from 'react';
import './KhaiVi.css';
function GaBBQ2Mieng(props) {
    return (
        <div>
            <div className='card1'>
                <img className='pic' id='BBQ' src='http://thepizzacompany.vn/images/thumbs/000/0003870_bbq-chicken-platter-2pcs_300.jpeg'></img>
                <h2 id='cuoi'>Gà Nướng BBQ (2 miếng)</h2>
                <div className='des' id='cuoi'>Thịt gà mềm ngọt, thấm đẫm gia vị, da gà giòn rụm, màu vàng ươm bắt mắt</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>99.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default GaBBQ2Mieng;