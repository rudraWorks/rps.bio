import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink)`
  width:90%;
  height:30px;
  background:#e5eff7;
  border:1px solid #c2cad1;
  border-radius:5px;
  margin:5px;
  text-align:center;
  cursor:pointer;
  color:black;
  text-decoration:none; 
  &:hover{
      background:#c9d2d9;
  }
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:25px;
  padding:15px;
`

const Container = styled.div`
  margin-top:10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
`

const ACTIVE_LINK = {
  background:'#7a9bb3',
  color:'white',
  border:'1px solid #c2cad1'
}

function Links({setShowNavPanel}) { 
    return (
        <Container>

            <Link to='' style={({ isActive }) => (isActive ? ACTIVE_LINK : {})} onClick={()=>setShowNavPanel(false)} >
                Home
            </Link>

            <Link to='about' style={({ isActive }) => (isActive ? ACTIVE_LINK : {})} onClick={()=>setShowNavPanel(false)} >
                About
            </Link>

            <Link to='projects' style={({ isActive }) => (isActive ? ACTIVE_LINK : {})} onClick={()=>setShowNavPanel(false)}>
                Projects
            </Link>


            <Link to='articles' style={({ isActive }) => (isActive ? ACTIVE_LINK : {})} onClick={()=>setShowNavPanel(false)}>
                Blogs
            </Link> 

            <Link to='links' style={({ isActive }) => (isActive ? ACTIVE_LINK : {})} onClick={()=>setShowNavPanel(false)}>
                Links
            </Link> 

            
            <Link to='courses' style={({ isActive }) => (isActive ? ACTIVE_LINK : {})} onClick={()=>setShowNavPanel(false)}>
                Courses
            </Link> 

            {/* <Link to='notes' style={({ isActive }) => (isActive ? ACTIVE_LINK : {})} onClick={()=>setShowNavPanel(false)}>
                Notes 
            </Link>  */}


        </Container>
    )
}

export default Links