import React, { useContext, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/AuthCtx';
import { useNavigate } from 'react-router-dom';
import {cartOnReducerFn,notificationReducerFn} from '../../../redux/cartReducer';
import Cart from '../../Daily_Expanses/Cart';
import Notification from '../../Notification-UI/Notification';


import { useDispatch, useSelector } from 'react-redux';
import { isLogginReducerFn } from '../../../redux/authSlice';
import Auth from '../../Authentication/Auth';


let isIntiatial=true;

const Header = () => {
const isLoggin= useSelector(state=>state.Auth.isLoggin);
const isSignup=useSelector(state=>state.Auth.isSignUp);
 const dispatch = useDispatch();

 const cartItems =useSelector(state=>state.cart?.carts);
const cartItemsNum =cartItems?.reduce((a,c)=>{return a+(+c.quantity)},0)

const cartOn= useSelector(state=>state.cart.isCart)
const cart =useSelector(state=>state.cart.carts);
const notification=useSelector(state=>state.cart.isnoti)
const notification1=useSelector(state=>state.cart.notification)


  const logOutHandler=()=>{
    console.log("isloggggggggggggggggggggg",isLoggin)
    dispatch(isLogginReducerFn(false));
  }
  const cartHandler=()=>{
dispatch(cartOnReducerFn(true))
  }

  
  useEffect(()=>{

  const fetchNotification = async()=>{
    dispatch(notificationReducerFn({title:"pending!",status:"Pending",message:"Sending Cart Data..."}));

     const res = await fetch(`https://expensetrackerapp-ca61f-default-rtdb.firebaseio.com/cart.json`,{
      method:'PUT',
      body:JSON.stringify(cart)
    });

    if(!res.ok){
      throw new Error(".............something went wrong")
    }
    dispatch(notificationReducerFn({title:"Sucess!",status:"Sucess",message:"Sent Cart Data Succesfully"}))
  }
  if(isIntiatial){
    isIntiatial=false;
    return;
  }

  fetchNotification().catch(err=>{
    dispatch(notificationReducerFn(
      {
      title:"Error!",
      status:"error",
      message:"Sending Cart Data Failed"
    }))

  })

},[cart])




  return (<>
    <section className='w-full bg-black text-white m-0 p-0 justify-center text-center' >
    {notification && <Notification title={notification1.title} status={notification1.status} message={notification1.message}/>}
    
    <ul className='w-full h-12 flex p-2 justify-around'>
    <li><Link to='/' >Home</Link></li>
    {!isLoggin ?  <li><Link to='/auth' >{isSignup?'SignUp':'SignIn'}</Link></li>:
    <li > <Link to='/auth'><button onClick={logOutHandler}>Logout</button></Link></li>}  
   {isLoggin && <li><Link to='/expanses' >Expanses</Link></li>}
   {isLoggin && <li><Link to='/cart' className=' text-white border-green-800 bg-green-800  p-2 px-3 justify-center text-center rounded-md' 
  //  style={
    // {color:'white',textDecoration:'none',border:'1px solid green',background:'green',padding:'10px',borderRadius:'10px'}}
    >Cart {cartItemsNum}</Link></li>}

    </ul>
      


    </section>

    {cartOn && <Cart onClick={cartHandler}/>}
    </>
  )
}

export default Header
