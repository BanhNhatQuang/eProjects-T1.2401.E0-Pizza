import React from 'react';
import './Salad.css';
import { useNavigate } from 'react-router-dom';

function Salad1(props) {
    const navigate = useNavigate();
    return (
        <div className='container1' id='first'>
            <div className='card2'>
                <img className='pic' onClick={()=>navigate("/SaladDetail/1")} id='MyY1' src='http://thepizzacompany.vn/images/thumbs/000/0002252_garden-salad_300.png'></img>
                <h3 id='cuoi'>Salad Trộn Dầu Giấm</h3>
                <div className='des' id='cuoi'>Rau với sốt dầu giấm</div>
                {/* <div className='des' id=''></div> */}
                <br></br>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>79.000đ</div>
                    </div>
                    <button onClick={()=>navigate("/SaladDetail/1")} className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default Salad1;