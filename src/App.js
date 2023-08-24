
import './App.css';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage';
import Headerpart from './Headerpart';
import Contact from './Contact'
import {BrowserRouter,Redirect,Navigate, Route, Routes, Link} from 'react-router-dom'
import About from './About';
import Loginform from './Loginform';
import Protectedrout from './Protectedrout';
import Products from './Products';
// import NotFound from './Notfound';

function App() {
  return (
    <BrowserRouter>
      <Headerpart />
      <Routes>
        <Route exact path='/' Component={Homepage} />
        <Route exact path='/login' Component={Loginform} />
        <Route exact path='/contact' Component={Contact} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/products' Component={Products} />
        {/* <Route exact path='/notfound' Component={NotFound} />
        <Link to='notfound' /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
