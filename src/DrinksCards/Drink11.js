import React from 'react';
import './ThucUong.css';

function Drink11(props) {
    return (
        <div className='container1' id='sencond'>
            <div className='card2'>
                <img className='pic' id='MyY1' src='https://th.bing.com/th/id/OIP.0V68sdMvTXzi6hFWecy4AwHaJc?w=143&h=182&c=7&r=0&o=5&dpr=2&pid=1.7.png'></img>
                <h3 id='cuoi'>Soda 7Up</h3>
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

export default Drink11;