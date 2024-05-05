import React from 'react';
import './Salad.css';
function Salad5(props) {
    return (
        <div className='container1' id='first'>
            <div className='card2'>
                <img className='pic' id='MyY' src='http://thepizzacompany.vn/images/thumbs/000/0002251_caesars-salad_300.png'></img>
                <h3 id='cuoi'>Salad Trộn Sốt Caesar</h3>
                <div className='des' id='cuoi'>Rau tươi trộn với sốt Caesar</div>
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

export default Salad5;