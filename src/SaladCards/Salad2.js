import React from 'react';
import './Salad.css';

function Salad2(props) {
    return (
        <div className='container1' id='sencond'>
            <div className='card2'>
                <img className='pic' id='MyY2' src='http://thepizzacompany.vn/images/thumbs/000/0002250_signature-salad_300.png'></img>
                <h3 id='cuoi'>Salad Đặc Sắc</h3>
                <div className='des' id='cuoi'>Salad rau và trái cây tươi dùng kèm xốt kem đặc biệt của The Pizza Company</div>
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

export default Salad2;