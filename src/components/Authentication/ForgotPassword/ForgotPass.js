import React, { useRef } from 'react';
import classes from '../SignIn/SignIn.module.css'
import { Link } from 'react-router-dom';

const ForgotPass = () => {
    const inputEmail=useRef();
    const url='https://identitytoolkit.googleapis.com/v1/accounts:';
    const api='AIzaSyAkMk6UO0ngHH7v1mMLuxpVzXm_0oJ1wC4'

    const forgotPasswordFormHandler=async(e)=>{
        e.preventDefault();
        const email1=inputEmail.current.value;
fetch(`${url}sendOobCode?key=${api}`,{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        requestType: "PASSWORD_RESET",
        email: email1
    })
}).then(res=>{
    return res.json();
}).then(data=>{
    console.log("forgot password", data);
}).catch(err=>{
    console.log(err.message);
})
    }

  return (
    <div className=''>
    <form style={{width:'20%'}} className={classes.form} onSubmit={forgotPasswordFormHandler}>
    <h3 style={{textAlign:'center'}}>Enter the email with Which you have register</h3>
  
        <div className={classes.inputdiv}>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' ref={inputEmail} required style={{border:'1px solid black'}}/>

      

        </div>
    
        <div className={classes.inputdiv2}>
        <button style={{cursor:'pointer'}}> Send Link
      </button>
        </div>
        
    </form>
    <div className={classes.inputdiv3} >Already a User?
    <span style={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>      
      <Link to='/auth' style={{textAlign:'center'}}>Login</Link>
</span>
    </div>

</div>
  )
}

export default ForgotPass
