import React from 'react';
import './Salad.css';

function Salad3(props) {
    return (
        <div className='container1' id='sencond'>
            <div className='card2'>
                <img className='pic' id='MyY' src='http://thepizzacompany.vn/images/thumbs/000/0002600_chicken-strip-salad_300.png'></img>
                <h3 id='cuoi'>Salad Gà Giòn Không Xương</h3>
                <div className='des' id='cuoi'>Salad Gà giòn với trứng cút, thịt xông khói, phô mai parmesan và sốt Thousand Island</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>89.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default Salad3;