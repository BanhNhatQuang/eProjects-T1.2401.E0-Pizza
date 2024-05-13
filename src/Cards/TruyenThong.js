import React from 'react';
import Card13 from './Card13';
import Card14 from './Card14';
import Card15 from './Card15';
import Card16 from './Card16';

function TruyenThong(props) {
    return (
        <div>
            <h1 className='name'>Truyền Thống</h1>
            <div className='list'>
                <Card13></Card13>
                <Card14></Card14>
                <Card15></Card15>
                <Card16></Card16>
            </div>
        </div>
    );
}

export default TruyenThong;