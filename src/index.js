import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Authentication from './components/Authentication/Authentication';
import Home from './components/Home/Home';
import ForgotPass from './components/Authentication/ForgotPassword/ForgotPass';
import Expanses from './components/Daily_Expanses/Expanses';

const routers=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
{
path:'/auth',
element:<Authentication/>
},{
  path:'/',
  element:<Home/>
}
,{
   path:'/forgot-password',
   element:<ForgotPass/>
},{
  path:'/expanses',
  element:<Expanses/>
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
