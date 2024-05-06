import { useNavigate } from 'react-router-dom';
import './KhaiVi.css';
import React from 'react';

function GaBBQ9Mieng(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className='card2'>
                <img className='pic' id='PICTURE' onClick={()=>navigate("/detailKhaiVi/3")} src='http://thepizzacompany.vn/images/thumbs/000/0003870_bbq-chicken-platter-2pcs_300.jpeg'></img>
                <h2 id='cuoi'>Gà Nướng BBQ (9 miếng)</h2>
                <div className='des' id='cuoi'>Thịt gà mềm ngọt, thấm đẫm gia vị, da gà giòn rụm, màu vàng ươm bắt mắt</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>359.000đ</div>
                    </div>
                    <button onClick={()=>navigate("/detailKhaiVi/3")} className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default GaBBQ9Mieng;