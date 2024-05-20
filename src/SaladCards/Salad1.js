import React from 'react';
import './Salad.css';
import { useNavigate } from 'react-router-dom';

function Salad1(props) {
    const navigate = useNavigate();
    return (
        <div className='container1' id='first'>
            <div className='card2'>
                <img className='pic' onClick={()=>navigate("/SaladDetail/1")} id='MyY1' src='http://thepizzacompany.vn/images/thumbs/000/0002252_garden-salad_300.png'></img>
                <h3 id='cuoi5'>Salad mixes with vinegar</h3>
                <div className='des' id='cuoi8'>Fresh Vegetable mixes with vinegar</div>
                {/* <div className='des' id=''></div> */}
                <br></br>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>From</div>
                        <div className='price'>79.000đ</div>
                    </div>
                    <button onClick={()=>navigate("/SaladDetail/1")} className='mua-ngay'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Salad1;