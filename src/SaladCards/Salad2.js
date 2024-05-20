import React from 'react';
import './Salad.css';

function Salad2(props) {
    return (
        <div className='container1' id='sencond'>
            <div className='card2'>
                <img className='pic' id='MyY2' src='http://thepizzacompany.vn/images/thumbs/000/0002250_signature-salad_300.png'></img>
                <h3 id='cuoi6'>Mixed Salad</h3>
                <div className='des' id='cuoi'>A varity of vegetable mixed together</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>From </div>
                        <div className='price'>89.000đ</div>
                    </div>
                    <button className='mua-ngay'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Salad2;