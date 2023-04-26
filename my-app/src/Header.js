import React from 'react'
import { CryptoState } from './CryptoContext'
import { useState } from 'react';
import { auth } from "./firebase"
import {signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import unknownuser from './unknownuser.png'

const Header = () => {

    const {currency,setCurrency,url,setUrl,progress,setProgress}=CryptoState();
    let navigate = useNavigate();

    const Signout=()=>{
      signOut(auth).then(() => {
        alert('Signed out successfully')
        setUrl(unknownuser);
        navigate("/", { replace: true });
      }).catch((error) => {
       alert(error.message);
      });
    }
   
  return (
    <>
    <LoadingBar
    color='#f11946'
    progress={progress}
    
  />


    <nav className="navbar " style={{backgroundColor:'rgb(22, 27, 23)'}}>
  <div className="container-fluid">
    <a className="navbar-brand" style={{color:'rgb(248, 219, 5)'}}>Crypto Tracker</a>
   
    <select className="selectpicker" aria-label=".form-select-sm example"
    onChange={(e)=>setCurrency(e.target.value)} style={{marginLeft:'1000px',backgroundColor:'rgb(22, 27, 23)',color:'rgb(248, 219, 5)',border:'2px solid rgb(248, 219, 5)',position:'relative',right:'98px'}}>
  <option value={"INR"}>INR</option>
  <option value={"USD"}>USD</option>
</select> <span><div style={{backgroundColor:'white',width:'35px',height:'35px',borderRadius:'90px',backgroundImage:`url(${url})`,backgroundSize:'35px',position:'relative',right:'85px'}}></div></span><span style={{position:'absolute',right:'20px',paddingTop:'2px'}}>
    {/* Collapse */}
    <button style={{color:'rgb(248, 219, 5)',backgroundColor:'rgb(22, 27, 23)',border:'2px solid rgb(248, 219, 5)'}} onClick={Signout}>Logout</button>
{/* end of collapse */}
</span>
  </div>
</nav>
</>
  )
}

export default Header
