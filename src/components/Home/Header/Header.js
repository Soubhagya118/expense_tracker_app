import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/AuthCtx';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const authCtx=useContext(AuthContext);
  const navigate =useNavigate();

  const logOutHandler=()=>{

    authCtx.LoggOutHandler(false);
    navigate('/auth')
  }

  return (
    <section style={{width:'100%',height:'50px',background:'black',margin:'0px',padding:'0',justifyContent:'center',textAlign:'center'}}>
    <ul style={{width:'100%',display:'flex',gap:'10%',listStyle:'none',height:'20px',padding:'10px'}}>
    <li><Link to='/' style={{color:'white',textDecoration:'none'}}>Home</Link></li>
   {!authCtx?.isLoggin ?<li><Link to='/auth' style={{color:'white',textDecoration:'none'}}>Login/SignUp</Link></li>:
   <li > <Link to='/auth'><button className='text-white' onClick={logOutHandler}>Logout</button></Link></li>}  
   {authCtx?.isLoggin&& <li><Link to='/expanses' style={{color:'white',textDecoration:'none'}}>Expanses</Link></li>}

    </ul>
      
    </section>
  )
}

export default Header
