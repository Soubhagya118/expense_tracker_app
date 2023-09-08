import React,{useContext, useRef, useState} from 'react';
import GitProfile from '../GitProfile/GitProfile';
import AuthContext from '../store/AuthCtx';

const Home = () => {
  const authCtx=useContext(AuthContext);
  // console.log("authXtx isloggin",authCtx.isLoggin)
  const [isCompleteProfile,setIsCompleteProfile] =useState(true);
  const handler=()=>{
    setIsCompleteProfile(e=>!e);
  }

  return (
    <>
    {authCtx.isLoggin ?
    <section style={{margin:'1rem 1rem'}}>
   
    <div style={{display:'flex',justifyContent:'space-between',padding:'0.rem',fontFamily:'sans-serif'}} >
    <div>
      <h2>Welcome to Expense Tracker</h2>
    </div>
   {isCompleteProfile && 
   <div style={{background:'lightgrey',padding:'0.4rem',borderRadius:'10px',fontSize:'small',textAlign:'center',justifyContent:'center',width:'250px'}}><p>your profile is incomplete.<button style={{color:'blue', background:'transparent',border:'none'}} onClick={()=>setIsCompleteProfile(e=>!e)}><i>Complete now</i></button></p></div>
   }
   {!isCompleteProfile &&   <div style={{background:'lightgrey',padding:'0.4rem',borderRadius:'10px',fontSize:'small',textAlign:'center',justifyContent:'center',width:'300px'}}><p>your profile is 64%completed.A complete Profile has higher chances of landing a job.<button style={{color:'blue', background:'transparent',border:'none'}} onClick={()=>setIsCompleteProfile(e=>!e)}><i>Complete now</i></button></p></div>}
   </div>
  
   <div style={{width:'100%',display:'flex',justifyContent:'end', marginTop:'1rem'}} >

    {!isCompleteProfile &&<GitProfile handler={handler}/>}
    </div>
  

    </section>
    :<h1>Home Page</h1>
     } </> )
}

export default Home
