import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
function Header(acc) {
    // const {acc} = props;
    console.log(acc);
    const navigate = useNavigate();
    return (
        <div className='HeaderContainer'>
            {/* <div className='header'>
                <div className='containerDelivery'>
                    <button className='Delivery'>
                        <img className='delivery-img' src="https://th.bing.com/th/id/OIP.6-7eloWSNSLkp_E9naiBnAHaJ4?&w=160&h=240&c=7&dpr=2&pid=ImgDet.img" alt="hello" />
                        <span className='primary-text-size'>Take Away</span>
                    </button>
                    <button className='Delivery'>
                        <img className='delivery-img' src="https://static.vecteezy.com/system/resources/previews/000/352/032/original/shop-vector-icon.jpg" alt="hello" />
                        <span className='primary-text-size'>Come and take</span>
                    </button>
                </div>
                <div className='location'>
                    <input placeholder='Nhap vi tri cua ban'></input>
                </div>
            
            </div> */}
            {/* <div className='App'>
            </div> */}
            <div className='nav'>
                {/* <button onClick={() => navigate("/Product")} className='Pizza'>Pizza</button> */}
                <button onClick={() => navigate("/KhaiVi")} className='Starter'>Starter</button>
                <button onClick={() => navigate("/ThucUong")} className='Drinks'>Drinks</button>
                <button onClick={() => navigate("/Salad")} className='Salad'>Salad</button>
                <div class="dropdown">
                    <button onClick={() => navigate("/Product")} className="Pizza">Pizza
                        {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                        <button onClick={() => navigate("/DacBiet")}>Đặc Biệt</button>
                        <button onClick={() => navigate("/HaiSan")}>Hải Sản Cao Cấp</button>
                        <button onClick={() => navigate("/ThapCamCaoCap")}>Thập Cẩm Cao Cấp</button>
                        <button onClick={() => navigate("/TruyenThong")}>Truyền Thống</button>
                        <button onClick={() => navigate("/Chay")}>Pizza Chay</button>
                    </div>
                </div>
                <img onClick={() => navigate("/")} className='logo' src='https://th.bing.com/th?id=OIP.K67R1mVUCBNDbsRLHrc2IAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2' alt='logo'></img>
                <a className='login' href='/Login'>Login</a>
            </div>
        </div>
    );
}

export default Header;