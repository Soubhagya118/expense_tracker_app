import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn'

const Auth = (props) => {
    const isSignup=useSelector(state=>state.Auth.isSignUp);


  return (
    <>
    {/* <SignUp/> */}
      {isSignup && <SignUp  />}
        {!isSignup &&<SignIn />}
    </>
  )
}

export default Auth
