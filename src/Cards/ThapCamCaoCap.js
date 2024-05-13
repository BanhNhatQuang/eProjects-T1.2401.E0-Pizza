import React from 'react';
import Card7 from './Card7';
import Card8 from './Card8';
import Card9 from './Card9';
import Card10 from './Card10';
import Card11 from './Card11';
import Card12 from './Card12';

function ThapCamCaoCap(props) {
    return (
        <div>
            <div>
                <h1 className='name'>Thập Cẩm Cao Cấp</h1>
                <div className='list'>
                    <Card7></Card7>
                    <Card8></Card8>
                    <Card9></Card9>
                    <Card10></Card10>
                </div>
            </div>
            <div>
                <div className='list'>
                    <Card11></Card11>
                    <Card12></Card12>
                </div>
            </div>
        </div>
    );
}

export default ThapCamCaoCap;