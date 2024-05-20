import React from 'react';
import Salad1 from '../SaladCards/Salad1';
import Salad2 from '../SaladCards/Salad2';
import Salad3 from '../SaladCards/Salad3';
import Salad4 from '../SaladCards/Salad4';
import Salad5 from '../SaladCards/Salad5';

function Salad(props) {
    return (
        <div>
            <h1 className='name'>Salad</h1>
            <div className='list'>
                <Salad1></Salad1>
                <Salad2></Salad2>
                <Salad3></Salad3>
                <Salad4></Salad4>
            </div>
            <div className='list'>
                <Salad5></Salad5>
            </div>
        </div>
    );
}

export default Salad;