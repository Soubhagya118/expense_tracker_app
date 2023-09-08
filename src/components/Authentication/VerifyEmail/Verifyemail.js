import React,{useContext} from 'react';
import AuthContext from '../../store/AuthCtx';

const Verifyemail = () => {
   const url='https://identitytoolkit.googleapis.com/v1/accounts:';
   const api ='AIzaSyAkMk6UO0ngHH7v1mMLuxpVzXm_0oJ1wC4';

    const authCtx= useContext(AuthContext);
    let idToken= authCtx?.userDetails?.idToken;
    console.log("idToken",idToken)

    const verifyEmailHandler = async(e)=>{

        e.preventDefault();
        fetch(`${url}sendOobCode?key=${api}`,{
             method:'POST',
             headers:{
               'Content-Type': 'application/json'
                     },
             body:JSON.stringify({
                requestType: "VERIFY_EMAIL",
                idToken:idToken
             })
        }).then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data)
        }).catch(err=>{
            console.log("verifyemail err",err.message)
        })
    }
  return (
    <div className='border-1 border-black h-auto w-110 justify-center text-center'>
    <h2>Verify Your Email</h2>
      <button className='border-2 border-blue-900 p-2 rounded-xl hover:bg-black hover:text-white' onClick={verifyEmailHandler}>Verifyemail</button>
    </div>
  )
}

export default Verifyemail
