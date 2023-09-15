import React, { useRef, useState ,useContext} from 'react';
import classes from './SignUp.module.css';
import { useNavigate,Link } from 'react-router-dom';

// ===================redux===============
import {useDispatch, useSelector} from 'react-redux';
import {isSignUpReducerFn, isLogginReducerFn,userIdReducerFn,userDataReducerFn} from '../../../redux/authSlice'
// import { isLogginReducerFn,userIdReducerFn,userDataReducerFn } from '../../../redux/authSlice';

const SignUp = (props) => {
const isLoggin = useSelector(state=>state.Auth.isLoggin);
const issignUp = useSelector(state=>state.Auth.isSignUp)
const dispatch=useDispatch()

  const inputEmail =useRef();
const inputPassword =useRef();
const inputConfirmPassword =useRef();
const navigaete =useNavigate();

// const [storeAuth,setStoreAuth] =useState();

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
 dispatch(isLogginReducerFn(true));
 dispatch(userIdReducerFn(data?.idToken))
dispatch(userDataReducerFn(data))
 navigaete('/')

}
const signInreducer=()=>{
dispatch(isSignUpReducerFn(false))
console.log("issignup",issignUp)
}

  return (
    <div>
    {!isLoggin &&
      <section >
        <div className={classes.formDiv}>
            <form className={classes.form} onSubmit={signUpFormHandler}>
            <h1 style={{textAlign:'center',fontSize:'20px'}}>SignUp</h1>
          
                <div className={classes.inputdiv}>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' ref={inputEmail} style={{border:'1px solid black'}} required/>

                <label htmlFor='password'>Password</label>
                <input id='password' type='password' style={{border:'1px solid black'}} ref={inputPassword} required/>
                
                <label htmlFor='confirmpassword'>Confirm Password</label>
                <input id='confirmpassword' type='password' style={{border:'1px solid black'}} ref={inputConfirmPassword} required/>


                </div>
            
                <div className={classes.inputdiv2}>
                <button > SignUp
              </button>
                </div>
                
            </form>
            
            <div className={classes.inputdiv3} >
            Have an Account?
            <span onClick={signInreducer}
            style={{textDecoration:'underline',color:'blue',cursor:'pointer'}}
            >LogIn</span>
            </div>


        </div>
      </section>}
    </div>
  )
}

export default SignUp;
