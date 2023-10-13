import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Login from '../Login/Login'
import { useSelector } from 'react-redux';


const Home = () => {
  const logedIn = useSelector((state)=>state.login.isLogin);
  console.log(logedIn)
  const [is, setIs] = useState(logedIn)
  useEffect(() => {setIs(logedIn);}, [logedIn]);
  return (
    <div>
      
      {!is ?<Login/>:(<><Navbar/><Main/></>)}
      
    </div>
  )
}

export default Home
