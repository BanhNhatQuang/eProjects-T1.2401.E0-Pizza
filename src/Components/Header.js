import React from 'react';
import './Header.css';
function Header(props) {
    return (
        <div className='div-header'>
            <div className='header'>
                <img className='logo' src='https://media-exp1.licdn.com/dms/image/C560BAQGuMm0LXv1dKg/company-logo_200_200/0/1549723569142?e=2159024400&v=beta&t=TOK7iaSQno4T_v0u9R-ElqGGS-s7L3wAw0TaONsjy0g' alt='logo'></img>
                <div className='containerDelivery'>
                    <button className='Delivery'>
                        <img className='delivery-img' src="https://th.bing.com/th/id/OIP.6-7eloWSNSLkp_E9naiBnAHaJ4?&w=160&h=240&c=7&dpr=2&pid=ImgDet.img" alt="hello" />
                        <span className='primary-text-size'>Dat giao hang</span>
                    </button>
                    <button className='Delivery'>
                        <img className='delivery-img' src="https://static.vecteezy.com/system/resources/previews/000/352/032/original/shop-vector-icon.jpg" alt="hello" />
                        <span className='primary-text-size'>Dat den lay</span>
                    </button>
                </div>
                <div className='location'>
                    <input placeholder='Nhap vi tri cua ban'></input>
                </div>
                <div>hello</div>
            </div>
            <div className='App'>
            </div>
        </div>
    );
}

export default Header;