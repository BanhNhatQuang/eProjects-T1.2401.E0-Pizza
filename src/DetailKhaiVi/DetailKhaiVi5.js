import React from 'react';

function DetailKhaiVi5(props) {
    return (
        <div className='DetailBox'>
            <div className='DetailBox1'>
                <img className='DetailPic' src='http://thepizzacompany.vn/images/thumbs/000/0003870_bbq-chicken-platter-2pcs_300.jpeg'></img>
                <h2 className='DetailPrice'>249.000đ</h2>
            </div>
            <div className='DetailBox2'>
                <div className='Box2'>
                    <div className='price'>___</div>
                    <h2>Gà Giòn Xốt Hàn - Cay (5 miếng)</h2>
                    {/* <div className='kich-thuoc'>Kích thước Nhỏ 6” - Đế Dày</div> */}
                    <div>Phục vụ kèm xốt mù tạc mật ong và củ cải lên men.</div>
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
                    <input type='text' placeholder='Nhập ghi chú bạn ở đây'></input>
                </div>
            </div>
        </div>
    );
}

export default DetailKhaiVi5;