import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink)`
  width:90%;
  height:30px;
  background:${props => props.primary ? "blue" : "lightgreen"};
  border:1px solid #87a387;
  border-radius:5px;
  margin:5px;
  text-align:center;
  cursor:pointer;
  color:black;
  text-decoration:none; 
  &:hover{
      background:#7ed57e;
  }
  display:flex;
  align-items:center;
  justify-content:center;
`

const Container = styled.div`
  margin-top:10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
`

const ACTIVE_LINK = {
  background:'gray',
  color:'white',
  border:'1px solid black'
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

            <Link to='blogs' style={({ isActive }) => (isActive ? ACTIVE_LINK : {})} onClick={()=>setShowNavPanel(false)}>
                Blogs
            </Link> 

        </Container>
    )
}

export default Links