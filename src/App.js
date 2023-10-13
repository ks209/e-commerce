import React from 'react';
import './App.css';

import { useSelector } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from './Routes.js';





function App() {

  const logedIn = useSelector((state)=>state.login.isLogin);
  console.log(logedIn)



  return (
    <>
    <Router>
    <AllRoutes/>
    </Router>
    </>
  );
}

export default App;
