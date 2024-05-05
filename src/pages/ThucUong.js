import React from 'react';
import Drink1 from '../DrinksCards/Drink1';
import Drink2 from '../DrinksCards/Drink2';
import Drink3 from '../DrinksCards/Drink3';
import Drink4 from '../DrinksCards/Drink4';
import Drink5 from '../DrinksCards/Drink5';
import Drink6 from '../DrinksCards/Drink6';
import Drink7 from '../DrinksCards/Drink7';
import Drink8 from '../DrinksCards/Drink8';
import Drink9 from '../DrinksCards/Drink9';
import Drink10 from '../DrinksCards/Drink10';
import Drink11 from '../DrinksCards/Drink11';

function ThucUong(props) {
    return (
        <div>
            <div className='list'>
                <Drink1></Drink1>
                <Drink2></Drink2>
                <Drink3></Drink3>
                <Drink4></Drink4>
            </div>
            <div className='list'>
                <Drink5></Drink5>
                <Drink6></Drink6>
                <Drink7></Drink7>
                <Drink8></Drink8>
            </div>
            <div className='list'>
                <Drink9></Drink9>
                <Drink10></Drink10>
                <Drink11></Drink11>
            </div>
        </div>
    );
}

export default ThucUong;