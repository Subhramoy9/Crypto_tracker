import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from "./firebase"
import {createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
 import { useNavigate } from "react-router-dom";
 import { CryptoState } from './CryptoContext';
import google from './google.png';
import LoadingBar from 'react-top-loading-bar'

const SignUp = () => {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
 let navigate = useNavigate();
 const {url,setUrl}=CryptoState();
 const { progress,setProgress } = CryptoState();
 const provider = new GoogleAuthProvider();
 
const register=()=>{
    if(email==="" || password===""){
      alert('Pls enter all the fields');
      
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Account created");
    setProgress(100);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
}

const googleLogin=async()=>{
      
  signInWithPopup(auth,provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    alert('Signed in')
    console.log(user.email);
    console.log(user);
    setUrl(user.photoURL);
    navigate("/home", { replace: true });
    setProgress(100);
    
  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    alert(errorMessage);
    
  });
}

  return (
      <>

      <LoadingBar
    color='#f11946'
    progress={progress}/>


      <form style={{border:'1px solid',width:'50vw',height:'68vh',textAlign:'center',margin:'90px 290px',paddingInline:'20px'}}>
        <h4>Signup</h4>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}} />
  </div>
  
  <button type="button" className="btn btn-primary" onClick={register}>Submit</button><br></br>
  Already have an account?
  <Link to="/signin">Sign in</Link><br></br>or<br></br>
    <button type='button' onClick={googleLogin} style={{marginTop:'8px'}}><img src={google}/>Sign in  with google</button>
</form>
</>
  )
}

export default SignUp
