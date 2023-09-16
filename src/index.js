import React,{useState}  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import ForgotPass from './components/Authentication/ForgotPassword/ForgotPass';
import Expanses from './components/Daily_Expanses/Expanses';
import Auth from './components/Authentication/Auth';
import Cart from './components/Daily_Expanses/Cart';
// =====================importing redux store============
import ReduxStore from './redux/ReduxStore';
import {Provider, useSelector} from 'react-redux'


const routers=createBrowserRouter([{
  path:'/',
  element: <Provider store={ReduxStore}><App/></Provider>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
{
path:'/auth',
element:<Auth/>

},{
   path:'/forgot-password',
   element:<ForgotPass/>
},{
  path:'/expanses',
  element:<Expanses/>
  
}
,
{
    path:'/cart',
element:<Cart/>
}
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routers}/>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
