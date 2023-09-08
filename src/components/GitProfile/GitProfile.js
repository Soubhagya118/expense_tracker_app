import React,{useRef,useState,useContext} from 'react';
import {FaGit, FaGlobe} from 'react-icons/fa';
import AuthContext from '../store/AuthCtx';


const GitProfile = (props) => {
  const authCtx = useContext(AuthContext);
 
    const name=useRef();
  const portfolio = useRef();
  let url='https://identitytoolkit.googleapis.com/v1/accounts:';
  let api='AIzaSyAkMk6UO0ngHH7v1mMLuxpVzXm_0oJ1wC4';
  

  let idToken= authCtx?.userDetails?.idToken;

  function getUpdatedUserData (){
    fetch(`${url}lookup?key=${api}`,{
      method:'POST',
      headers:{
             'Content-Type':'application/json'
              },
      body:JSON.stringify({
        idToken:idToken
      })
    }).then(res=>{
     
      return res.json();
    }).then(data=>{
      // emailVerified,  displayName,  passwordHash,  photoUrl, providerUserInfo
      console.log("lookup data",data)
      // console.log("update data",newData);
  
    }).catch(err=>{
      console.log("error messgae",err.message);
    })
  

  }

  const gitDetailsHandler=async(e)=>{
    e.preventDefault();
    const name1=name.current.value;
    const portfolio1 = portfolio.current.value;

    // alert (portfolio1);
  fetch(`${url}update?key=${api}`,{
    method:'POST',
    headers:{
           'Content-Type':'application/json'
            },
    body:JSON.stringify({
      idToken:idToken,
      displayName:name1,
      photoUrl:portfolio1,
      returnSecureToken:true
    })
  }).then(res=>{
    if(!res.ok){
      alert('.....update profile err')
      throw new Error('......Update Profile Error')
    };
    return res.json();
  }).then(data=>{
    // emailVerified,  displayName,  passwordHash,  photoUrl, providerUserInfo
    console.log("updated data",data)
    const newData={...data,idToken:idToken}
    // console.log("update data",newData);
    authCtx?.userUpdatedDetails(newData);
    getUpdatedUserData()

  }).catch(err=>{
    console.log("error messgae",err.message);
  })



  }


  return (
   
      <div style={{width:'60%',padding:'5px',borderBottom:'2px solid black'}}>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:'10px'}}>
      <h2>Contact Details</h2>
        <button onClick={props.handler}>Cancel</button>
      </div>
       <form  onSubmit={gitDetailsHandler}>
        <div style={{display:'flex',marginBottom:'10px',justifyContent:'space-between'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <label htmlFor='name'><FaGit style={{marginRight:'10px'}}/>Full Name:</label>
        <input  type='text' ref={name} id='name' required/>
        </div>
       <div style={{display:'flex'}}>
       <label htmlFor='portfolio'><FaGlobe style={{marginRight:'10px'}}/>Portfolio URL:</label>
        <input type='text' ref={portfolio} id='portfolio' required/>
       </div>
      
        </div>
        <button style={{color:'white',background:'pink',border:'3px solid pink',borderRadius:'5px'}}>Update</button>
        </form>
      </div>
  )
}

export default GitProfile
