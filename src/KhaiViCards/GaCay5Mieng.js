import { useNavigate } from 'react-router-dom';
import './KhaiVi.css';

import React from 'react';

function GaCay5Mieng(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className='card1'>
                <img className='pic' id='Cay2' onClick={()=>navigate("/detailKhaiVi/5")} src='http://thepizzacompany.vn/images/thumbs/000/0003870_bbq-chicken-platter-2pcs_300.jpeg'></img>
                <h2 id='cuoi'>Gà Giòn Xốt Hàn - Cay (5 miếng)</h2>
                <div className='des' id='cuoi'>Phục vụ kèm xốt mù tạc mật ong và củ cải lên men.</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>249.000đ</div>
                    </div>
                    <button onClick={()=>navigate("/detailKhaiVi/5")} className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default GaCay5Mieng;