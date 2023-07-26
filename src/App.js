
import './App.css';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage';
import Headerpart from './Headerpart';
import Contact from './Contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './About';
import Loginform from './Loginform';
import Protectedrout from './Protectedrout';

const App =()=> {
  return(
    <BrowserRouter>
    <Headerpart />
    <Routes>
    <Route exact path='/' Component={Homepage} />
    <Route exact path='/login' Component={Loginform} />
    <Route exact path='/contact' Component={Contact} />
    <Route exact path='/about' Component={About} />
    </Routes>
    {/* <Route exact path='/' Component={} /> */}
    </BrowserRouter>
  );
}

export default App;
