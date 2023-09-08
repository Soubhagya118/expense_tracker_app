import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Authentication from './components/Authentication/Authentication';
import Home from './components/Home/Home';
import GitProfile from './components/GitProfile/GitProfile';

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
// ,{
//   path:'/:id',
//   element:<GitProfile/>
// }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routers}/>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
