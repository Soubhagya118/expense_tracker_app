import React,{useRef,useContext} from 'react';
import { useNavigate, } from 'react-router-dom';
import classes from './SignIn.module.css';
import AuthContext from '../../store/AuthCtx';

const SignIn = (props) => {
    const authCtx = useContext(AuthContext)
    const navigaete=useNavigate()
    const inputEmail=useRef();
    const inputPassword =useRef();
    const url='https://identitytoolkit.googleapis.com/v1/accounts:';
    const api='AIzaSyAkMk6UO0ngHH7v1mMLuxpVzXm_0oJ1wC4';

const signInFormHandler=async (e)=>{
    e.preventDefault();
    const email1=inputEmail.current.value;
    const password1= inputPassword.current.value;

    fetch(`${url}signInWithPassword?key=${api}`,{
        method:'POST',
        headers:{
             'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email:email1,
            password:password1,
            returnSecureToken:true
        })
    }).then(res=>{
        if(!res.ok){
            alert('......SignIn Error');
            throw new Error('.....SignIn Error')
        }
        return res.json();
    }).then(data=>{
        // console.log("SignIn successfully",data);

       
         console.log(typeof data)
        authCtx?.isLogginHandler(true);
        authCtx?.userDetailsHandler(data);
        authCtx?.tokenHandler(data?.idToken);

    //    navigaete('/');
        }).catch(err=>{
            console.log(err.message);
        })


    // const res = await fetch(`${url}signInWithPassword?key=${api}`,
    // { 
    // method:'POST',
    // headers:{
    //      'Content-Type': 'application/json'
    //  },
    //  body:JSON.stringify({
    //      email:email1,
    //      password:password1,
    //      returnSecureToken:true

    //  })
    // });
    // if(!res.ok){
    //     throw new Error('....SignIn error')
    // }
    // const data = res.json();
   navigaete('/')
}

  return (
    <div className={classes.formDiv}>
    <form className={classes.form} onSubmit={signInFormHandler}>
    <h1 style={{textAlign:'center',fontSize:'20px'}}>LogIn</h1>
  
        <div className={classes.inputdiv}>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' ref={inputEmail} required/>

        <label htmlFor='password'>Password</label>
        <input id='password' type='password' ref={inputPassword} required/>
       

        </div>
    
        <div className={classes.inputdiv2}>
        <button style={{cursor:'pointer'}}> Login
      </button>
        </div>
        <a href='#' style={{textAlign:'center'}}>Forget Password</a>
        
    </form>
    <div className={classes.inputdiv3} >Don't have an account?
    <span style={{textDecoration:'underline',color:'blue',cursor:'pointer'}} onClick={props.authHandler}>SignUp</span>
    </div>

</div>
  )
}

export default SignIn
