import React from 'react';
import './ThucUong.css';

function Drink10(props) {
    return (
        <div className='container1' id='sencond'>
            <div className='card2'>
                <img className='pic' id='MyY2' src='http://thepizzacompany.vn/images/thumbs/000/0002702_mirinda-soda-kem-can_300.png'></img>
                <h3 id='cuoi'>Canned Mirinda</h3>
                <div className='des' id='cuoi'></div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                <div>
                        <div className='gia-chi-tu'>Only</div>
                        <div className='price'>29.000đ</div>
                    </div>
                    <button className='mua-ngay'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Drink10;