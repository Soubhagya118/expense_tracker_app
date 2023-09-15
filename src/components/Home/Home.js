import React,{useContext, useRef, useState} from 'react';
import GitProfile from '../GitProfile/GitProfile';
import Verifyemail from '../Authentication/VerifyEmail/Verifyemail';

// =======================redux=================

import { useDispatch,useSelector } from 'react-redux';
import { isLogginReducerFn } from '../../redux/authSlice';


const Home = () => {
  // const authCtx=useContext(AuthContext);
  // console.log("authXtx isloggin",authCtx.isLoggin)
const isLoggin= useSelector(state=>state.Auth.isLoggin);
console.log("isloggin from home page",isLoggin)

  const dispatch = useDispatch()
  const [isCompleteProfile,setIsCompleteProfile] =useState(true);
  const handler=()=>{
    setIsCompleteProfile(e=>!e);
  }

  return (
    <>
    {isLoggin &&
    <section style={{margin:'1rem 1rem',height:'450px'}}>
   
    <div style={{display:'flex',justifyContent:'space-between',padding:'0.rem',fontFamily:'sans-serif'}} >
     <div className='flex gap-5'>
      <h2>Welcome to Expense Tracker</h2>
      <Verifyemail/>
    </div>
   {isCompleteProfile && 
   <div style={{background:'lightgrey',padding:'0.4rem',borderRadius:'10px',fontSize:'small',textAlign:'center',justifyContent:'center',width:'250px',height:'30px'}}><p>your profile is incomplete.<button style={{color:'blue', background:'transparent',border:'none'}} onClick={()=>setIsCompleteProfile(e=>!e)}><i>Complete now</i></button></p></div>
   }
   {!isCompleteProfile &&   <div style={{background:'lightgrey',padding:'0.4rem',borderRadius:'10px',fontSize:'small',textAlign:'center',justifyContent:'center',width:'300px',height:'65px'}}><p>your profile is 64%completed.A complete Profile has higher chances of landing a job.<button style={{color:'blue', background:'transparent',border:'none'}} onClick={()=>setIsCompleteProfile(e=>!e)}><i>Complete now</i></button></p></div>}
   </div>
  
   <div style={{width:'100%',display:'flex',justifyContent:'end', marginTop:'1rem'}} >

    {!isCompleteProfile &&<GitProfile handler={handler}/>}
    </div>
  

    </section>
    }
    {!isLoggin && <h1>Home Page</h1>
     } </> )
}

export default Home
