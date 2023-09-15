import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/AuthCtx';
import { useNavigate } from 'react-router-dom';
import {cartOnReducerFn} from '../../../redux/cartReducer'


import { useDispatch, useSelector } from 'react-redux';
import { isLogginReducerFn } from '../../../redux/authSlice';
import Auth from '../../Authentication/Auth';

const Header = () => {
const isLoggin= useSelector(state=>state.Auth.isLoggin);
const isSignup=useSelector(state=>state.Auth.isSignUp);
 const dispatch = useDispatch();

const cartOn= useSelector(state=>state.cart.isCart)

  const logOutHandler=()=>{
    console.log("isloggggggggggggggggggggg",isLoggin)
    dispatch(isLogginReducerFn(false));
  }
  const cartHandler=()=>{
dispatch(cartOnReducerFn(true))
  }

  return (
    <section style={{width:'100%',height:'50px',background:'black',margin:'0px',padding:'0',justifyContent:'center',textAlign:'center'}}>
    <ul style={{width:'100%',display:'flex',gap:'10%',listStyle:'none',height:'20px',padding:'10px'}}>
    <li><Link to='/' style={{color:'white',textDecoration:'none'}}>Home</Link></li>
    {!isLoggin ?  <li><Link to='/auth' style={{color:'white',textDecoration:'none'}}>{isSignup?'SignUp':'SignIn'}</Link></li>:
    <li > <Link to='/auth'><button className='text-white' onClick={logOutHandler}>Logout</button></Link></li>}  
   {isLoggin && <li><Link to='/expanses' style={{color:'white',textDecoration:'none'}}>Expanses</Link></li>}
   {isLoggin && <li><Link to='/cart' style={{color:'white',textDecoration:'none'}} onClick={cartHandler}>Cart</Link></li>}

    </ul>
      
    </section>
  )
}

export default Header
