import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Links from '../components/Links'


const Container = styled.div`
    height:100%;
    min-height:100vh;
    display:flex; 
`
const NavPanel = styled.div`
    background:#ffde59;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-right:1px solid #9a9adf;
    width:350px;
    @media only screen and (max-width: 600px) {
      display:${props => props.shownavpanel ? "flex" : "none"};
      width:${props => props.shownavpanel ? "100%" : "0"};
    } 

`
const Content = styled.div`
    background:aliceblue;
    width:100%;
    overflow-y:scroll;
    height:100vh;
    @media only screen and (max-width: 600px) {
      display:${props => props.shownavpanel ? "none" : "block"};
      width:${props => props.shownavpanel ? "0" : "100%"};
    }
`
const CloseButton = styled.button`
    display:none;
    position:relative;
    left:49%;
    transform:translateX(-50%);
    border-radius:50%;
    height:30px;
    width:30px;
    border:none;
    margin:5px;
    @media only screen and (max-width: 600px) {
      display:block;
    } 
`
const ShowNavPanelButton = styled.button`
    display:none;
    width:100%;
    border:none;
    height:30px;
    border-bottom:1px dotted gray;
    @media only screen and (max-width: 600px) {
      display:block;
    }

`

function Root() {
  const [showNavPanel, setShowNavPanel] = useState(false)
  return (
    <Container>

      <NavPanel shownavpanel={+showNavPanel}>
        <CloseButton onClick={() => setShowNavPanel(false)}>X</CloseButton>
        <img style={{ width: '150px', margin: '5px', borderRadius:'5px' }} src='/assets/me3.png' />
        <Links setShowNavPanel={setShowNavPanel}  />
      </NavPanel>

      <Content shownavpanel={+showNavPanel}>
        <ShowNavPanelButton onClick={() => setShowNavPanel(true)}>NAVBAR</ShowNavPanelButton>
        <Outlet />
      </Content>
    </Container>
  )
}

export default Root