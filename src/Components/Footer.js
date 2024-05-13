import React from 'react';
import './Footer.css'
function Footer(props) {
    return (
        <div>
            <div className='FooterContainer'>
                <div className='FirstBar'>
                    <img className='FooterLogo' src='https://th.bing.com/th?q=Logo+De+Pizza&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=2&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=en&adlt=moderate&t=1&mw=247.png'></img>
                    <div className='Phone'>1234-567-89</div>
                </div>
                <div className='SecondBar'>
                    <div className='FirstHalf'>Location: Ngon Pizza Joint Stock Company 77 Tran Nhan Ton, Ward 9, District 5, Ho Chi Minh City</div>
                    <div className='SecondHalf'>
                        <div className='FirstHalf'>Franchise:</div>
                        <div>Price: $10.000</div>
                        <div>Contact us through this number to get more info: XXX-XXXX-XXX</div>
                    </div>
                </div>
                <div className='LastBar'>
                 <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1959.5856363433998!2d106.64076278186376!3d10.798197104853877!3m2!1i1024!2i768!4f13.1!2m1!1spizza%20hut!5e0!3m2!1svi!2s!4v1715601751600!5m2!1svi!2s" width="200" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
            );
}

            export default Footer;