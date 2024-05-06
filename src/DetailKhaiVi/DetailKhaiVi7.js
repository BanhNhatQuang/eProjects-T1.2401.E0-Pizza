import React from 'react';

function DetailKhaiVi7(props) {
    return (
        <div className='DetailBox'>
            <div className='DetailBox1'>
                <img className='DetailPic' src='http://thepizzacompany.vn/images/thumbs/000/0003949_crispy-chicken-with-k-sauce2pcs_300.png'></img>
                <h2 className='DetailPrice'>99.000đ</h2>
            </div>
            <div className='DetailBox2'>
                <div className='Box2'>
                    <div className='price'>___</div>
                    <h2>Gà Giòn Xốt Hàn - Truyền Thống (2 miếng)</h2>
                    {/* <div className='kich-thuoc'>Kích thước Nhỏ 6” - Đế Dày</div> */}
                    <div>Ngon hơn khi dùng kèm xốt mù tạc mật ong và củ cải lên men</div>
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

export default DetailKhaiVi7;