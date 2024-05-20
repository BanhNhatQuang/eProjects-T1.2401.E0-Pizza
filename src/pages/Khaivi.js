import React from 'react';
// import MuaNgay from '../Components/MuaNgay';
import './Product.css';
import GaBBQ2Mieng from '../KhaiViCards/GaBBQ2Mieng';
import GaBBQ5Mieng from '../KhaiViCards/GaBBQ5Mieng';
import GaBBQ9Mieng from '../KhaiViCards/GaBBQ9Mieng';
import GaCay2Mieng from '../KhaiViCards/GaCay2Mieng';
import GaCay5Mieng from '../KhaiViCards/GaCay5Mieng';
import GaCay9Mieng from '../KhaiViCards/GaCay9Mieng';
import GaHan2Mieng from '../KhaiViCards/GaHan2Mieng';
import GaHan5Mieng from '../KhaiViCards/GaHan5Mieng';
import GaHan9Mieng from '../KhaiViCards/GaHan9Mieng';
import GaToiHQ2Mieng from '../KhaiViCards/GaToiHQ2Mieng';
import GaToiHQ5Mieng from '../KhaiViCards/GaToiHQ5Mieng';
import GaToiHQ9Mieng from '../KhaiViCards/GaToiHQ9Mieng';
function Khaivi(props) {
    const { KhaiVi, setKhaiVi } = props
    return (
        <div>
            <h1 className='name'>Starter</h1>
            <div>
                {/* {KhaiVi.map((item, index) => (
                    <div className='list' key={index}>
                        <div className='component'>
                            <img src={item.picture}></img>
                            <h2>{item.name}</h2>
                            <div className='des' id='cuoi'>{item.des}</div>
                            <div>
                                <div className='temp'>
                                    <div>
                                        <div className='hello'>Giá chỉ từ</div>
                                        <div className='price'>{item.price}</div>
                                    </div>
                                    <button className='mua-ngay'>Mua ngay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} */}
                {/* <h1 className='name'>Công Thức Đặc Biệt</h1> */}
                <div className='list'>
                    <GaBBQ2Mieng></GaBBQ2Mieng>
                    <GaBBQ5Mieng></GaBBQ5Mieng>
                    <GaBBQ9Mieng></GaBBQ9Mieng>
                    <GaCay2Mieng></GaCay2Mieng>
                </div>
                <div className='list'>
                    <GaCay5Mieng></GaCay5Mieng>
                    <GaCay9Mieng></GaCay9Mieng>
                    <GaHan2Mieng></GaHan2Mieng>
                    <GaHan5Mieng></GaHan5Mieng>
                </div>
                <div className='list'>
                    <GaHan9Mieng></GaHan9Mieng>
                    <GaToiHQ2Mieng></GaToiHQ2Mieng>
                    <GaToiHQ5Mieng></GaToiHQ5Mieng>
                    <GaToiHQ9Mieng></GaToiHQ9Mieng>
                </div>
            </div>

        </div>
    );
}

export default Khaivi;