import { useNavigate } from 'react-router-dom';
import './KhaiVi.css';

import React from 'react';

function GaHan2Mieng(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className='card2'>
                <img className='pic' id='PICTURE' onClick={()=>navigate("/detailKhaiVi/7")} src='http://thepizzacompany.vn/images/thumbs/000/0003949_crispy-chicken-with-k-sauce2pcs_300.png'></img>
                <h2 id='cuoi'>Crispy Chicken with Traditional Korean Sauce (2 pieces)</h2>
                <div className='des' id='cuoi'>Crispy Chicken with Traditional Korean Sauce (9 pieces)</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Only</div>
                        <div className='price'>99.000đ</div>
                    </div>
                    <button onClick={()=>navigate("/detailKhaiVi/7")} className='mua-ngay'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default GaHan2Mieng;