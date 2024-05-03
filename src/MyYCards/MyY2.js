import React from 'react';
import './MyY.css';

function MyY2(props) {
    return (
        <div>
            <div className='card2'>
                <img className='pic' src='http://thepizzacompany.vn/images/thumbs/000/0003667_ham-mushroom-w-cream-truffle-sause_300.png'></img>
                <h2 id='cuoi'>Mỳ Ý Truffle</h2>
                <div className='des' id='cuoi'>Nấm Truffle đen với hương thơm ngất ngây, phủ trên lớp sốt kem nấm beo béo đậm đà cùng thịt giăm bông mềm mại.</div>
                {/* <div id='cuoi'>Thousand Island</div> */}
                <div className='temp'>
                    <div>
                        <div className='gia-chi-tu'>Giá chỉ từ</div>
                        <div className='price'>149.000đ</div>
                    </div>
                    <button className='mua-ngay'>Mua ngay</button>
                </div>
            </div>
        </div>
    );
}

export default MyY2;