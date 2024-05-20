import React from 'react';
import './KhaiVi.css';
import { useNavigate } from 'react-router-dom';

function GaBBQ5Mieng(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className='card2'>
                <img className='pic' id='PICTURE' onClick={()=>navigate("/detailKhaiVi/2")} src='http://thepizzacompany.vn/images/thumbs/000/0003870_bbq-chicken-platter-2pcs_300.jpeg'></img>
                <h2 id='cuoi'>BBQ Grilled Chicken (5 pieces)</h2>
                <div className='des' id='cuoi'>The chicken meat is soft and sweet, soaked in spices, the chicken skin is crispy, and the color is eye-catching yellow</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Only</div>
                        <div className='price'>219.000đ</div>
                    </div>
                    <button onClick={()=>navigate("/detailKhaiVi/2")} className='mua-ngay'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default GaBBQ5Mieng;