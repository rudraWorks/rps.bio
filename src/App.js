import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Links from './pages/Links';
import Certifications from './pages/Certifications';

const router =  createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[ 
      {
        index:true,
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'projects',
        element:<Projects/>
      },
      { 
        path:'blogs',
        element:<Blogs/>
      },
      {
        path:'links',
        element:<Links/>
      },
      {
        path:'certificates',
        element:<Certifications/>
      }
    ] 
  }
]) 
function App() {
  return <RouterProvider router={router} />  
}

export default App;
