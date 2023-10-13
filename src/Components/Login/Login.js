import React from "react";
import "./login.css";
import {logInActions} from '../../Features/loginSlice'
import { useDispatch } from "react-redux";




const Login = () => {

  const dispatch = useDispatch();

  const handleSwitch=(e)=>{
    e.preventDefault();
    console.log("button clicked")
    dispatch(logInActions.logedIn())
  }


  return (
    <>
    {<div className="login">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div>
            <label for="username"></label>
            <input
              required
              placeholder="Username"
              name="username"
              type="text"
            />
          </div>
          <div>
            <label for="password"></label>
            <input
              required
              placeholder="Password"
              name="password"
              type="password"
            />
          </div>
          <div className="checkbox">
            <label for="checkbox" placeholder="remember me"></label>
            <input type="checkbox" checked="checked" name="remember" />
            <h5 style={{padding: "0 20px"}}>Remember Me</h5>
          </div>
            <button type="submit">Login</button>
          
        </form>
      </div>
      <button onClick={handleSwitch} style={{marginTop:'10px',width: '150px',height:'80px',padding:'20px'}}>
        Switch button because no backend to login
      </button>
    </div>}
    </>
  );
};

export default Login;
