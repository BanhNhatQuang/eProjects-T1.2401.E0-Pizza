import React from 'react';
import MyY1 from '../MyYCards/MyY1';
import MyY2 from '../MyYCards/MyY2';
import MyY3 from '../MyYCards/MyY3';
import MyY4 from '../MyYCards/MyY4';
import MyY5 from '../MyYCards/MyY5';
import MyY6 from '../MyYCards/MyY6';
import MyY7 from '../MyYCards/MyY7';
import MyY8 from '../MyYCards/MyY8';
import MyY9 from '../MyYCards/MyY9';
import MyY10 from '../MyYCards/MyY10';
import MyY11 from '../MyYCards/MyY11';
import './MyY.css';
function MyY(props) {
    return (
        <div>
            <div className='list'>
                <MyY1></MyY1>
                <MyY2></MyY2>
                <MyY3></MyY3>
                <MyY4></MyY4>
            </div>
            <div className='list'>
                <MyY5></MyY5>
                <MyY6></MyY6>
                <MyY7></MyY7>
                <MyY8></MyY8>
            </div>
            <div className='list'>
                <MyY9></MyY9>
                <MyY10></MyY10>
                <MyY11></MyY11>
            </div>

        </div>
    );
}

export default MyY;