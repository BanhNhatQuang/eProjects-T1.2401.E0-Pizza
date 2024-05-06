import { useNavigate } from 'react-router-dom';
import './KhaiVi.css';

import React from 'react';

function GaToiHQ2Mieng(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div className='card2'>
                    <img className='pic' id='PICTURE' onClick={()=>navigate("/detailKhaiVi/10")} src='http://thepizzacompany.vn/images/thumbs/000/0003952_crispy-chicken-with-sg-sauce2pcs_300.png'></img>
                    <h2 id='cuoi'>Gà Giòn Xốt Tương Tỏi Hàn Quốc (2 miếng)</h2>
                    <div className='des' id='cuoi'>Công thức đặc biệt pha chút vị the nhè nhẹ và mùi thơm của gừng, tỏi mang đến cảm giác mới lạ khi thưởng thức.</div>
                    {/* <div id='cuoi'>Thousand Island</div> */}
                    <div className='temp'>
                        <div>
                            <div className='gia-chi-tu'>Giá chỉ từ</div>
                            <div className='price'>99.000đ</div>
                        </div>
                        <button onClick={()=>navigate("/detailKhaiVi/10")} className='mua-ngay'>Mua ngay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GaToiHQ2Mieng;