import { useNavigate } from 'react-router-dom';
import './KhaiVi.css';

import React from 'react';

function GaCay2Mieng(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className='card2'>
                <img className='pic' id='Cay' onClick={()=>navigate("/detailKhaiVi/4")} src='http://thepizzacompany.vn/images/thumbs/000/0003870_bbq-chicken-platter-2pcs_300.jpeg'></img>
                <h2 id='cuoi'>Crispy Chicken with Korean Sauce - Spicy (2 pieces)</h2>
                <div className='des' id='cuoi'>Served with honey mustard sauce and fermented radish.</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Only</div>
                        <div className='price'>99.000đ</div>
                    </div>
                    <button onClick={()=>navigate("/detailKhaiVi/4")} className='mua-ngay'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default GaCay2Mieng;