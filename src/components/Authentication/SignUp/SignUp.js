import React, { useRef, useState } from 'react';
import classes from './SignUp.module.css'

const SignUp = () => {
const [isLoggin,setIsLoggin] =useState();    
const inputEmail =useRef();
const inputPassword =useRef();
const inputConfirmPassword =useRef();
let url='https://identitytoolkit.googleapis.com/v1/accounts:'
let api='AIzaSyAkMk6UO0ngHH7v1mMLuxpVzXm_0oJ1wC4';

const authHandler =()=>{
    setIsLoggin((e)=>!e);
}

    const signUpFormHandler=(e)=>{
        e.preventDefault();
       const email1=inputEmail.current.value;
       const password1 = inputPassword.current.value;
if(isLoggin==false){
       var confirmpassword1=inputConfirmPassword.current.value;
}
       let fullUrl;
if(isLoggin){
        fullUrl=`${url}signInWithPassword?key=${api}`
}
else{
    fullUrl = `${url}signUp?key=${api}`;
    if(confirmpassword1!=password1){
        return alert('PLEASE CORRECT YOUR PASSWORD')
}
fetch(fullUrl,{
    method:'POST',
    headers:{
         'Content-Type': 'application/json'
     },
     body:JSON.stringify({
         email:email1,
         password:password1,
         returnSecureToken:true

     })


 })
 
 .then(res=>{
    console.log("res",res)
     if(!res.ok){
         throw new Error('............invalid Input')
     }
     return res.json()
 }).then((data)=>{
         console.log("user has succesfully signUp", data)
 }).catch(err=>{
     console.log(err.message)
 })
}
}
  return (
    <div>
      <section >
        <div className={classes.formDiv}>
            <form className={classes.form} onSubmit={signUpFormHandler}>
            <h1>{!isLoggin?'SignUp':'LogIn'}</h1>
          
                <div className={classes.inputdiv}>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' ref={inputEmail} required/>

                <label htmlFor='password'>Password</label>
                <input id='password' type='password' ref={inputPassword} required/>
                {!isLoggin?<>
                <label htmlFor='confirmpassword'>Confirm Password</label>
                <input id='confirmpassword' type='password' ref={inputConfirmPassword} required/></>:''}


                </div>
            
                <div className={classes.inputdiv2}>
                <button > {isLoggin?'Login':'SignUp'}
              </button>
                </div>
                {isLoggin?<a href='#'>Forget Password</a>:''}
                
            </form>
            <div className={classes.inputdiv3} onClick={authHandler}> {isLoggin?"Don't have an account?Sign up":'Have an account? Login'}</div>

        </div>
      </section>
    </div>
  )
}

export default SignUp;
