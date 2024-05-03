import React from 'react';
import './MyY.css';

function MyY8(props) {
    return (
        <div>
            <div className='card2'>
                <img className='pic' id='My8' src='http://thepizzacompany.vn/images/thumbs/000/0002255_spaghetti-ham-mushroom_300.png'></img>
                <h2 id='cuoi'>Mỳ Ý Giăm Bông Và Nấm Sốt Kem</h2>
                <div className='des' id='cuoi'>Mỳ Ý, nấm và giăm bông được nấu cùng với sốt kem trắng</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>119.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default MyY8;