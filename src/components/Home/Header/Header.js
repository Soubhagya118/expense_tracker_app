import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <section style={{width:'100%',height:'50px',background:'black',margin:'0px',padding:'0',justifyContent:'center',textAlign:'center'}}>
    <ul style={{width:'100%',display:'flex',gap:'10%',listStyle:'none',height:'20px',padding:'10px'}}>
    <li><Link to='/' style={{color:'white',textDecoration:'none'}}>Home</Link></li>
    <li><Link to='/auth' style={{color:'white',textDecoration:'none'}}>Login/SignUp</Link></li>
    </ul>
      
    </section>
  )
}

export default Header
