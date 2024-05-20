import { useNavigate } from 'react-router-dom';
import './KhaiVi.css';

import React from 'react';

function GaToiHQ9Mieng(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div className='card2'> 
                    <img className='pic' onClick={()=>navigate("/detailKhaiVi/12")} id='PICTURE' src='http://thepizzacompany.vn/images/thumbs/000/0003952_crispy-chicken-with-sg-sauce2pcs_300.png'></img>
                    <h2 id='cuoi'>Crispy Chicken with Garlic Sauce (9 pieces)</h2>
                    <div className='des' id='cuoi'>Special formula mixed with a light taste and aroma of ginger and garlic.</div>
                    {/* <div id='cuoi'>Thousand Island</div> */}
                    <div className='temp'>
                        <div>
                            <div className='gia-chi-tu'>Only</div>
                            <div className='price'>429.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detailKhaiVi/12")} className='mua-ngay'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GaToiHQ9Mieng;