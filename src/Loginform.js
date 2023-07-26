import React, { useState } from 'react';
import './Loginform.css';
import { Navigate, useHistory, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Headerpart from './Headerpart';

const Loginform = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[showerorstatus,setshowerorstatus]=useState('false');
  const[errormsg,seterrormsg]=useState('');
  const navi = useNavigate();

  const onSubmitSuccess = (jwtToken) => {
    console.log('this is success');
    navi('/');
    Cookies.set('jwt_token', jwtToken, {expires: 30})
  };
  const onsubmitfailure=()=>{
    setshowerorstatus(true);
    seterrormsg('*USERNAME and PASSWORD didnt match')
    console.log(showerorstatus,errormsg)
  }

  const submitted = async (event) => {
    event.preventDefault();
    const userdetails = { username, password };
    const url = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(response);
    // console.log(data)
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token);
    }
    else{
      onsubmitfailure();
    }
  };

  const onChangeUserInput = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const onChangePassInput = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const jwtToken=Cookies.get('jwt_token')
  if(jwtToken!==undefined){
    console.log(jwtToken)
    return <Navigate to='/' />
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
            <label className="labelnames">USERNAME</label>
            <input
              className="labelinput"
              type="text"
              value={username}
              onChange={onChangeUserInput}
            ></input>
            <label className="labelnames">PASSWORD</label>
            <input
              className="labelinput"
              type="password"
              value={password}
              onChange={onChangePassInput}
            ></input>
            <button type="submit" className="loginbutton">
              LOGIN
            </button>
            {showerorstatus && <p className='errortab'>{errormsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
