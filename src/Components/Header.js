import React from 'react';
import './Header.css';
function Header(props) {
    return (
        <div>
            <h1>Hello</h1>
            <div className='containerDelivery'>

            </div>
            <button className='Delivery'>
                <img className='delivery-img' src="https://th.bing.com/th/id/OIP.6-7eloWSNSLkp_E9naiBnAHaJ4?&w=160&h=240&c=7&dpr=2&pid=ImgDet.img" alt="hello"/>
                <span className='primary-text-size'>Dat giao hang</span>
            </button>
            <button className='Delivery'>
                <img className='delivery-img' src="https://static.vecteezy.com/system/resources/previews/000/352/032/original/shop-vector-icon.jpg" alt="hello"/>
                <span className='primary-text-size'>Dat den lay</span>
            </button>
            
            
        </div>
    );
}

export default Header;