import React, { useEffect, useState } from 'react';
import './LoginPopup.css'
import { useNavigate } from 'react-router-dom';
// import { assets } from '../../assets/assets';


function LoginPopup({ setShowLogin}) {
    // const  = props
    const [currState, setCurrState] = useState("Sign Up");
    const [isActive, setIsActive] = useState(false);
    const [admin, setAdmin] = useState([]);
    const [account, setAccount] = useState();
    const [SignIn, setSignIn] = useState();
    const [errors, setErrors] = useState({nameError:"",passwordError:""});
    const [error, setError] = useState({nameError:"",passwordError:"", emailError:""});
    // const [acc, setAcc] = useState(false)
    const navigate = useNavigate();
    let acc = 0;
    useEffect(() => {
        fetch("/data/account.json")
          .then(res => res.json())
          .then(data => setAdmin(data))
      }, [])
    // console.log(admin);
    function handleChangeEmail(e) {
        let {name, value} = e.target
        handleValidate(name, value)
        setAccount({ ...account, [name]: value });
        // console.log(account);
    }function handleChangeInput(e) {
        let {name, value} = e.target
        handleValidateSignIn(name, value)
        setSignIn({ ...SignIn, [name]: value });
        // console.log(account);
    }
    function handleValidate(name, value) {
        if (name == "name") {
            if (value == "") {
                errors.nameError = "Email is required";
            }else {
                delete errors.nameError;
            }
        }
        if (name == "password") {
            if (value == "") {
                errors.passwordError = "Password is required";
            }else {
                delete errors.passwordError;
            } 
        }
    }
    function handleValidateSignIn(name, value) {
        if (name == "ten") {
            if (value == "") {
                error.nameError = "Name is required";
            }else {
                delete error.nameError;
            }
        }
        if (name == "password1") {
            if (value == "") {
                error.passwordError = "Password is required";
            }else {
                delete error.passwordError;
            } 
        }
        if (name == "email1") {
            if (value == "") {
                error.emailError = "Email is required";
            }else {
                delete error.emailError;
            } 
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(account);
        if(Object.keys(errors).length == 0){
            if (account.name == "demo1@gmail.com") {
                if (account.password == "123456") {
                    acc = 2
                    navigate("/")
                    alert("Welcome Host1")
                }
            }
            if (account.name == "demo2@gmail.com") {
                if (account.password == "1234567") {
                    acc = 3
                    navigate("/")
                    alert("Welcome Host2")
                }
            }
            if (account.name == "demo3@gmail.com") {
                if (account.password == "12345678") {
                    acc = 4
                    navigate("/")
                    alert("Welcome Host3")
                }
            }
            // console.log("acc:", acc);
            if (acc != 2){
                if (acc !=3){
                    if (acc != 4) {
                        alert("unfindable account");
                    }
                }
            }
        }else{
            alert("All field is required")
        }
    }
    function handleSubmit1(e) {
        e.preventDefault();
        // console.log(Object.keys(error).length);
        if(Object.keys(error).length == 0){
            navigate("/")
            alert("Welcome")
        }else{
            alert("All field is required")
        }
    }
    return (
        <div className='login-popup'>
            <div class={`login-popup-container container ${isActive ? 'active' : ''}`} id="container">
                <div class="form-container sign-up">
                    <form>
                    <div className='login-popup-title'>
                        <h1>Create Account</h1>
                        <a onClick={() => setShowLogin(false)} href="#" class="icon"><i class="fa-solid fa-xmark"></i></a>
                        {/* <img onClick={() => setShowLogin(false)} src={assets.cross_icon} /> */}
                        </div>
                        <div class="social-icons">
                            <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registeration</span>
                        <input onChange={handleChangeInput} name='ten' type="text" placeholder="Name" />
                        <input onChange={handleChangeInput} name='email1' type="email" placeholder="Email" />
                        <input onChange={handleChangeInput} name='password1' type="password" placeholder="Password" />
                        <button onClick={handleSubmit1}>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in">
                    <form>
                        <div className='login-popup-title'>
                            <h1>Sign In</h1>
                            <a onClick={() => setShowLogin(false)} href="#" className="icon"><i className="fa-solid fa-xmark"></i></a>
                            {/* <img onClick={() => setShowLogin(false)} src={assets.cross_icon} /> */}
                        </div>
                        <div class="social-icons">
                            <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                            <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email password</span>
                        <input name='name' onChange={handleChangeEmail} type="email" placeholder="Email" />
                        <input name='password' onChange={handleChangeEmail} type="password" placeholder="Password" />
                        {/* <a href="#">Forget Your Password?</a> */}
                        <button onClick={handleSubmit}>Sign In</button>
                    </form>
                </div>
                <div class="toggle-container">
                    <div class="toggle">
                        <div class="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button class="hidden" id="login" onClick={()=>{setIsActive(false)}}>Sign In</button>
                        </div>
                        <div class="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button class="hidden" id="register" onClick={()=>{setIsActive(true)}}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LoginPopup;