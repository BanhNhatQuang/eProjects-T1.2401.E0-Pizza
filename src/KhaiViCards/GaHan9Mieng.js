import { useNavigate } from 'react-router-dom';
import './KhaiVi.css';

import React from 'react';

function GaHan9Mieng(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div>
            <div className='card1'>
                <img className='pic' id='Han' onClick={()=>navigate("/detailKhaiVi/9")} src='http://thepizzacompany.vn/images/thumbs/000/0003949_crispy-chicken-with-k-sauce2pcs_300.png'></img>
                <h2 id='cuoi'>Crispy Chicken with Traditional Korean Sauce (9 pieces)</h2>
                <div className='des' id='cuoi3'>Crispy Chicken with Traditional Korean Sauce (9 pieces)</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Only</div>
                        <div className='price'>429.000đ</div>
                    </div>
                    <button onClick={()=>navigate("/detailKhaiVi/9")} className='mua-ngay'>Buy Now</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default GaHan9Mieng;