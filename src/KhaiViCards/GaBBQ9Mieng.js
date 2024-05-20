import { useNavigate } from 'react-router-dom';
import './KhaiVi.css';
import React from 'react';

function GaBBQ9Mieng(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className='card2'>
                <img className='pic' id='PICTURE' onClick={()=>navigate("/detailKhaiVi/3")} src='http://thepizzacompany.vn/images/thumbs/000/0003870_bbq-chicken-platter-2pcs_300.jpeg'></img>
                <h2 id='cuoi'>BBQ Grilled Chicken (9 pieces)</h2>
                <div className='des' id='cuoi'>The chicken meat is soft and sweet, soaked in spices, the chicken skin is crispy, and the color is eye-catching yellow</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Only</div>
                        <div className='price'>359.000đ</div>
                    </div>
                    <button onClick={()=>navigate("/detailKhaiVi/3")} className='mua-ngay'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default GaBBQ9Mieng;