import React from 'react';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';

function HaiSan(props) {
    return (
        <div>
            <div>
                <h1 className='name'>Hải Sản Cao Cấp</h1>
                <div className='list'>
                    <Card3></Card3>
                    <Card4></Card4>
                    <Card5></Card5>
                    <Card6></Card6>
                </div>
            </div>
        </div>
    );
}

export default HaiSan;