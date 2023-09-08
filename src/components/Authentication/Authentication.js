import React, { useState } from 'react'
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import classes from './SignIn/SignIn.module.css'

const Authentication = () => {
    const [isLoggin,setIsLoggin]=useState(false);
    

    const authHandler =()=>{
        setIsLoggin((e)=>!e);
    }
    
  return (
    <div className={classes.formDiv}>
    {!isLoggin&& <SignUp authHandler={authHandler}/>}
      {isLoggin&&<SignIn authHandler={authHandler}/>}
    </div>
  )
}

export default Authentication
