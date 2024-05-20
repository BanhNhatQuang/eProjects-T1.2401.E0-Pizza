import React from 'react';
import './Salad.css';

function Salad3(props) {
    return (
        <div className='container1' id='sencond'>
            <div className='card2'>
                <img className='pic' id='MyY1' src='http://thepizzacompany.vn/images/thumbs/000/0002600_chicken-strip-salad_300.png'></img>
                <h3 id='cuoi7'>Salad with crispy chicken nuggets</h3>
                <div className='des' id='cuoi'>the mix of chicken and vegetable</div>
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

export default Salad3;