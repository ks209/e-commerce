import React from 'react'
import './Navbar.css'

import {logInActions} from '../../Features/loginSlice'
import { useDispatch } from "react-redux";

import logo from '../../Assets/[PXPNG.COM]Ecommerce PNG File - 638x431.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const dispatch=useDispatch();

    const handleSwitch=(e)=>{
        console.log("working from Nav")
        e.preventDefault();
        dispatch(logInActions.logedOut())
      }



  return (
    <div className='upper'>
      <div className="nav">
        <div className="logo">
        <Link to='/'><img src={logo} alt="logo" id="logo"/></Link>
        </div>
        <div className="links">
          <ul id="list">
          <button className='lo' onClick={handleSwitch} style={{height: '80%',width: '20%'}}>Log Out</button>
          <li><Link to='/Cart'>Cart</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
