import React, { useState } from 'react';
import './Loginform.css';
import { Navigate, useHistory, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Headerpart from './Headerpart';
import SignupModal from './Signupmodal';

const Loginform = () => {
  // const [email, setemail] = useState('');
  // const [password, setPassword] = useState('');
  const [logindetails,setlogindetails]=useState({email:'',password:''});
  const[showerorstatus,setshowerorstatus]=useState('false');
  const[errormsg,seterrormsg]=useState('');
  const navi = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmitSuccess = (accesstoken) => {
    navi('/');
    Cookies.set('access_token',accesstoken, {expires: 30})
  };
  const onsubmitfailure=()=>{
    setshowerorstatus(true);
    seterrormsg('*USERNAME and PASSWORD didnt match')
    console.log(showerorstatus,errormsg)
  }

  const submitted = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/log',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Correct header for sending JSON
      },
      body: JSON.stringify(logindetails),
    });
    const data = await response.json();
    console.log('hiiii',response);
    console.log('byee',data.accesstoken)
    if (response.ok === true) {
      onSubmitSuccess(data.accesstoken);
    }
    else{
      onsubmitfailure();
    }
  };

  const onChangeUserInput = (e) => {
    setlogindetails({...logindetails,email:e.target.value});
    // console.log(logindetails);
  };

  const onChangePassInput = (e) => {
    setlogindetails({...logindetails, password:e.target.value});
    // console.log(logindetails);
  };
  const accessToken=Cookies.get('access_token')
  if(accessToken!==undefined){
    console.log('this is from cookies',accessToken)
    return navi('/');
  }


  return (
    <div>
      <h1 className="heading">E COMMERCE APPLICATION</h1>
      <div className="mainflex">
        <img
          className="image1"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="websitelogin"
        ></img>
        <div className="sub-flex">
          <img
            className="image2"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="websitelogo"
          ></img>
          <form onSubmit={submitted} id="FOOORM" name="userdetailsform">
            <label className="labelnames">EMAIL</label>
            <input
              className="labelinput"
              type="text"
              value={logindetails.email}
              onChange={onChangeUserInput}
            ></input>
            <label className="labelnames">PASSWORD</label>
            <input
              className="labelinput"
              type="password"
              value={logindetails.password}
              onChange={onChangePassInput}
            ></input>
            <button type="submit"  className="loginbutton">
              LOGIN
            </button>
            <div>
            <button onClick={openModal}>Open Signup</button>
            <SignupModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            {showerorstatus && <p className='errortab'>{errormsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
