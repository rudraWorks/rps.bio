import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import Links from './pages/Links';
import Courses from './pages/Courses';
import Notes from './pages/Notes';

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
        path:'articles',
        element:<Articles/>
      },
      {
        path:'links',
        element:<Links/>
      },
      {
        path:'courses',
        element:<Courses/>
      },
      {
        path:'notes',
        element:<Notes/>
      },
      {
        path:'*',
        element:<h2 style={{textAlign:'center',marginTop:'40px'}}>Four-o-Four :(</h2>
      }
    ] 
  }
]) 
function App() {
  return <RouterProvider router={router} />  
}

export default App;
