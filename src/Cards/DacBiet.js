import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';

function DacBiet(props) {
    return (
        <div>
            <div>
                <h1 className='name'>Công Thức Đặc Biệt</h1>
                <div className='list'>
                    <Card1></Card1>
                    <Card2></Card2>
                </div>
            </div>
        </div>
    );
}

export default DacBiet;