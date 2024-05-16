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
    const [errors, setErrors] = useState({nameError:"",passwordError:""});
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
    }
    function handleValidate(name, value) {
        // console.log(name, value);
        if (name == "name") {
            if (value == "") {
                errors.nameError = "Email is required";
            // } else if (value.length < 3 || value.length > 15) {
            //     errors.nameError =
            //         "Name must be between [3-15] characters";
            }else {
                delete errors.nameError;
            }
        }
        if (name == "password") {
            if (value == "") {
                errors.passwordError = "Password is required";
            // } else if (value.length < 3 || value.length > 15) {
            //     errors.passwordError =
            //         "Name must be between [3-15] characters";
            }else {
                delete errors.passwordError;
            } 
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(account);
        if(Object.keys(errors).length == 0){
            // console.log(account);
            // let [index ,result] = admin.filter(item => item.name(value) == account.name)
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
                        console.log("unfindable account");
                    }
                }
            }
            // console.log("acc:", acc);
            // if(acc!=2 or acc!= 3 or acc !=4){
            //     alert("unfindable account")
            // }
            // if (result == ""){
            //     alert("unfindable account")
            // }else{
            //     if (account.password == ) {
                    
            //     }
            // }
            // alert("Welcome back")
        }else{
            alert("All field is required")
        }
    }
    // function handleChangeInput(e) {
    //     let { name, value } = e.target;
    //     if (name == "age") {
    //         value = +value;
    //     }
    //     if (name == "gender") {
    //         value = (value == "true");
    //     }
    //     handleValidate(name, value)
    //     setEmp({ ...emp, [name]: value });

    // }
    // function handleValidate1(name, value) {
    //     console.log(name, value);
    //     if (name == "name") {
    //         if (value == "") {
    //             errors.nameError = "Name is required";
    //         } else if (value.length < 3 || value.length > 15) {
    //             errors.nameError =
    //                 "Name must be between [3-15] characters";
    //         }else {
    //             delete errors.nameError;
    //         }  
    //     }
    //     if (name == "age") {
    //         if (value == "") {
    //             errors.ageError = "Age is required";
    //         } else if (value <0 || value > 100) {
    //             errors.ageError =
    //                 "Age must be between [0-100] years old";
    //         }else {
    //             delete errors.ageError;
    //         }  
    //     }
    // }
    // function handleSubmi1(e) {
    //     e.preventDefault();
    //     if(Object.keys(errors).length == 0){
    //         let dataSubmit = {
    //             ...emp,
    //             id: uuidv4()
    //         }
    //         setEmployes(pre => [...pre, dataSubmit]);
    //         navigate("/");
    //     }else{
    //         alert("All field is required")
    //     }
        
    // }
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
                        <input required name='ten' type="text" placeholder="Name" />
                        <input required type="email" placeholder="Email" />
                        <input required type="password" placeholder="Password" />
                        <button onClick={()=>{
                            navigate("/")
                            alert("Welcome")
                        }}>Sign Up</button>
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