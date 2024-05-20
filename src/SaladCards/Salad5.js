import React from 'react';
import './Salad.css';
function Salad5(props) {
    return (
        <div className='container1' id='first'>
            <div className='card2'>
                <img className='pic' id='MyY' src='http://thepizzacompany.vn/images/thumbs/000/0002251_caesars-salad_300.png'></img>
                <h3 id='cuoi'>Salad with Ceasar sauce</h3>
                <div className='des' id='cuoi'>Fresh vegetable with Ceasar sauce</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>From</div>
                        <div className='price'>89.000đ</div>
                    </div>
                    <button className='mua-ngay'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Salad5;