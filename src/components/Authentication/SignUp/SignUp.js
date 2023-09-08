import React, { useRef, useState ,useContext} from 'react';
import classes from './SignUp.module.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/AuthCtx';

const SignUp = (props) => {
const [isLoggin,setIsLoggin] =useState();    
const inputEmail =useRef();
const inputPassword =useRef();
const inputConfirmPassword =useRef();
const navigaete =useNavigate();
const authCtxx= useContext(AuthContext);

// const [storeAuth,setStoreAuth] =useState();
let data;
if(authCtxx?.idToken){
  data=authCtxx?.idToken;
}else{data=[]}
const [idTokenData,setIdTokenData] =useState(data);

let url='https://identitytoolkit.googleapis.com/v1/accounts:'
let api='AIzaSyAkMk6UO0ngHH7v1mMLuxpVzXm_0oJ1wC4';

    const signUpFormHandler=async (e)=>{
        e.preventDefault();
       const email1=inputEmail.current.value;
       const password1 = inputPassword.current.value;

const res= await fetch(`${url}signUp?key=${api}`,{
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
if(!res.ok){
throw new Error('...SignUp Error')
}
 const data= res.json();
 console.log("signup succesfully",data);

 navigaete('/')

}

  return (
    <div>
      <section >
        <div className={classes.formDiv}>
            <form className={classes.form} onSubmit={signUpFormHandler}>
            <h1 style={{textAlign:'center',fontSize:'20px'}}>SignUp</h1>
          
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
                <button > SignUp
              </button>
                </div>
                
            </form>
            
            <div className={classes.inputdiv3} >Have an Account?<span style={{textDecoration:'underline',color:'blue',cursor:'pointer'}} onClick={props.authHandler}>LogIn</span></div>


        </div>
      </section>
    </div>
  )
}

export default SignUp;
