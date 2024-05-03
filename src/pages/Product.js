import React from 'react';
import './Product.css';
import Card1 from '../Cards/Card1';
import Card2 from '../Cards/Card2';
import Card3 from '../Cards/Card3';
import Card4 from '../Cards/Card4';
import Card5 from '../Cards/Card5';
import Card6 from '../Cards/Card6';
import Card7 from '../Cards/Card7';
import Card8 from '../Cards/Card8';
import Card9 from '../Cards/Card9';
import Card10 from '../Cards/Card10';
import Card13 from '../Cards/Card13';
import Card14 from '../Cards/Card14';
import Card12 from '../Cards/Card12';
import Card11 from '../Cards/Card11';
import Card16 from '../Cards/Card16';
import Card15 from '../Cards/Card15';
import Card17 from '../Cards/Card17';
import Card18 from '../Cards/Card18';
import Card19 from '../Cards/Card19';
function Product(props) {
    // const { products, setProducts } = props
    return (
        <div>
            <div>
                <h1 className='name'>Công Thức Đặc Biệt</h1>
                <div className='list'>
                    <Card1></Card1>
                    <Card2></Card2>
                </div>
            </div>
            <div>
                <h1 className='name'>Hải Sản Cao Cấp</h1>
                <div className='list'>
                    <Card3></Card3>
                    <Card4></Card4>
                    <Card5></Card5>
                    <Card6></Card6>
                </div>
            </div>
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
            <div>
                <h1 className='name'>Truyền Thống</h1>
                <div className='list'>
                    <Card13></Card13>
                    <Card14></Card14>
                    <Card15></Card15>
                    <Card16></Card16>
                </div>
            </div>
            <div>
                <h1 className='name'>Pizza Chay</h1>
                <div className='list'>
                    <Card17></Card17>
                    <Card18></Card18>
                    <Card19></Card19>
                    {/* <Card6></Card6> */}
                </div>
            </div>
        </div>
    );
}

export default Product;