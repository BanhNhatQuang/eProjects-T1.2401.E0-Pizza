import React from 'react';
import './ThucUong.css';

function Drink9(props) {
    return (
        <div className='container1' id='first'>
            <div className='card2'>
                <img className='pic' id='MyY2' src='http://thepizzacompany.vn/images/thumbs/000/0002573_pepsi-lime-can_300.png'></img>
                <h3 id='cuoi'>Black Lime Pepsi</h3>
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

export default Drink9;