import React from 'react';
import ThemVaoGioHang from '../Components/ThemVaoGioHang';

function DetailKhaiVi1(props) {
    // function DetailCard2() {
        // function handleClickBtn1(params) {
        //     setID(0)
        // }
        // function handleClickBtn2(params) {
        //     setID(1)
        // }
        // function handleClickBtn3(params) {
        //     setID(2)
        // }
        // const [id, setID] = useState(0)
        return (
            <div>
                {/* <h1>Hello</h1> */}
                <div className='DetailBox'>
                    <div className='DetailBox1'>
                        <img className='DetailPic' src='http://thepizzacompany.vn/images/thumbs/000/0003870_bbq-chicken-platter-2pcs_300.jpeg'></img>
                        <h2 className='DetailPrice'>99.000đ</h2>
                    </div>
                    <div className='DetailBox2'>
                        <div className='Box2'>
                            <div className='price'>___</div>
                            <h2>Gà Nướng BBQ (2 miếng)</h2>
                            {/* <div className='kich-thuoc'>Kích thước Nhỏ 6” - Đế Dày</div> */}
                            <div>Thịt gà mềm ngọt, thấm đẫm gia vị, da gà giòn rụm, màu vàng ươm bắt mắt</div>
                            {/* <br></br> */}
                            {/* <h3 className='kich-thuoc'>Kích Thước</h3>
                            <button onClick={handleClickBtn1} className={id == 0 ? 'btn' : 'btn1'}>Nhỏ 6"</button>
                            <button onClick={handleClickBtn2} className={id == 1 ? 'btn' : 'btn1'}>Vừa 9"</button>
                            <button onClick={handleClickBtn3} className={id == 2 ? 'btn' : 'btn1'}>Lớn 12"</button>
                            <div className='dash'>___________________________________________________</div>
                            <h3 className='kich-thuoc'>Đế</h3>
                            <input type="radio" name="status" checked></input>
                            <label>Dày</label>
                            <div className='dash'>___________________________________________________</div>
                            <br></br> */}
                            <h3 className='kich-thuoc'>Ghi Chú</h3>
                    <input className='GhiChu' type='text' placeholder='Nhập ghi chú bạn ở đây'></input>
                    {/* <GhiChu></GhiChu> */}
                    <ThemVaoGioHang></ThemVaoGioHang>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
// }

export default DetailKhaiVi1;