import { Outlet } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import { AuthContextProvider } from './components/store/AuthCtx';
import Footer from './components/Footer/Footer'
import './App.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
function App() {
  const themeChk= useSelector(state=>state.theme.isTheme);
  const sty=themeChk?{marginTop:'0px',left:'0',right:'0',width:'100%',position:'fixed',
background:'black',
color:'white'}:{marginTop:'0px',left:'0',right:'0',width:'100%',position:'fixed'}
  

  return (
    <AuthContextProvider>
    <section style={sty} >
     <Header/>
  
     <Outlet/>
     {/* <Footer/> */}
    </section>
    </AuthContextProvider>
  );
}

export default App;
