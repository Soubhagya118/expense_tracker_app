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
       const confirmpassword1=inputConfirmPassword.current.value;

    if(confirmpassword1==password1){
        let fullUrl;
       if(isLoggin){

       }else{
        fullUrl = `${url}signUp?key=${api}`
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
            if(!res.ok){
                throw new Error('............invalid Input')
            }
            return res.json()
        }).then((data)=>{
                console.log(data)
        }).catch(err=>{
            console.log(err.message)
        })
       
    }else{
        alert('PLEASE CORRECT YOUR PASSWORD')
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
                <label htmlFor='confirmpassword'>Confirm Password</label>
                <input id='confirmpassword' type='password' ref={inputConfirmPassword} required/>
                </div>
                <div className={classes.inputdiv2}>
                <button>SignUp
              </button>
                </div>
            </form>
            <div className={classes.inputdiv3}>Have an account? Login</div>

        </div>
      </section>
    </div>
  )
}

export default SignUp;
