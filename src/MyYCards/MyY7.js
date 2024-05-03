import React from 'react';
import './MyY.css';

function MyY7(props) {
    return (
        <div>
            <div className='card2'>
                <img className='pic' src='http://thepizzacompany.vn/images/thumbs/000/0002254_spicy-sausage-spaghetti_300.png'></img>
                <h2 id='cuoi'>Mỳ Ý Cay Xúc Xích</h2>
                <div className='des' id='cuoi'>Mỳ Ý rán với xúc xích cay, thảo mộc, ngò gai và húng quế Ý</div>
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

export default MyY7;