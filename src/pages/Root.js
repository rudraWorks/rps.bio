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
    background:aliceblue;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-right:1px solid #d1d1eb;
    width:300px;
    @media only screen and (max-width: 600px) {
      display:${props => props.shownavpanel ? "flex" : "none"};
      width:${props => props.shownavpanel ? "100%" : "0"};
    } 

`
const Content = styled.div`
    width:100%;
    overflow-y:scroll;
    height:100vh;
    @media only screen and (max-width: 600px) {
      display:${props => props.shownavpanel ? "none" : "block"};
      width:${props => props.shownavpanel ? "0" : "100%"};
    }
`
const CloseButton = styled.div`
    display:none;
    cursor:pointer;
    position:relative; 
    left:49%;
    transform:translateX(-50%);
    margin:5px;
    @media only screen and (max-width: 600px) {
      display:block;
    } 
`
const ShowNavPanelButton = styled.div`
    display:none;
    position:fixed;
    right:25px;
    top:10px;
    @media only screen and (max-width: 600px) {
      display:block;
    }
    padding-top:5px;
`

function Root() {
  const [showNavPanel, setShowNavPanel] = useState(false)
  return (
    <Container>

      <NavPanel shownavpanel={+showNavPanel}>
        <CloseButton onClick={() => setShowNavPanel(false)}>❌</CloseButton>
        <img src='/assets/logo3.png' style={{ width: '200px', marginTop: '35px', marginBottom: '35px' }} />
        <Links setShowNavPanel={setShowNavPanel} />
      </NavPanel>

      <Content shownavpanel={+showNavPanel}>
        <ShowNavPanelButton > 
          <img onClick={() => setShowNavPanel(true)} src='/assets/index.png' style={{height:'30px',cursor:'pointer'}}/>
        </ShowNavPanelButton>
        <Outlet />
      </Content>
    </Container>
  )
}

export default Root