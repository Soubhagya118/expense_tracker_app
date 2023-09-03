import React, { useRef, useState } from 'react';
import classes from './SignUp.module.css'

const SignUp = () => {
const [isLoggin,setIsLoggin] =useState();    
const inputEmail =useRef();
const inputPassword =useRef();
const inputConfirmPassword =useRef();
const authHandler =()=>{
    setIsLoggin((e)=>!e);
}
    const signUpFormHandler=()=>{

    }
  return (
    <div>
      <section >
        <div className={classes.formDiv}>
            <form className={classes.form} onSubmit={signUpFormHandler}>
            <h1>SignUp</h1>
                <div className={classes.inputdiv}>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' ref={inputEmail} required/>

                <label htmlFor='password'>Password</label>
                <input id='password' type='password' ref={inputPassword} required/>
                
                <label htmlFor='confirmpassword'>Confirm Password</label>
                <input id='confirmpassword' type='password' ref={inputConfirmPassword} required/>
                
                </div>
                <div className={classes.inputdiv2}>
                <button type='button'>Sign up</button>
                </div>
            </form>
            <div className={classes.inputdiv3}>Have an account? Login</div>

        </div>
      </section>
    </div>
  )
}

export default SignUp
