import React from 'react';
import Cookies from 'js-cookie';
import { Navigate} from 'react-router-dom'; // Use Redirect from 'react-router-dom' instead of 'react-router'
import Headerpart from './Headerpart';
import './Homepage.css';

function Homepage() {
    const jwtToken=Cookies.get('jwt_token')
    // console.log(jwt_token)
    if(jwtToken===undefined){
      return <Navigate to='/login' />
    }

  return (
    <div>
      <div className='main-flex'>
        <div className='image'>
          <h1>Clothes That Get YOU Noticed</h1>
          <p className='textstyle'>Fashion is part of daily air and it does not quite help
            that changes all the time. Clothes have always been a maker of the era and we are
            in revolution. Your fashion makes you been seen and heard that way your way you are.
            So, celebrate the seasons' new and exciting fashion in your own way.
          </p>
          <button className='but'>Shop now</button>
        </div>
        <div>
          <img className='image' src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png' alt='Nxt Trendz'></img>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
