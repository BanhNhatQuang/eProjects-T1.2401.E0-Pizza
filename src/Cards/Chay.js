import React from 'react';
import Card17 from './Card17';
import Card19 from './Card19';

function Chay(props) {
    return (
        <div>
            <h1 className='name'>Pizza Chay</h1>
            <div className='list'>
                <Card17></Card17>
                {/* <Card18></Card18> */}
                <Card19></Card19>
            </div>
        </div>
    );
}

export default Chay;