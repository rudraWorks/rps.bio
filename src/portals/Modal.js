import React from 'react'
import styled from 'styled-components'
import reactDom from 'react-dom'

const Container = styled.div`
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:60%;
    height:90%;
    display:flex;
    flex-direction:column;
    z-index:100000;
    @media only screen and (max-width: 700px) {
        width:90%;
    }
`
let Overlay = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    z-index:100000;
    background:rgba(0,0,0,0.2);
`
const Button = styled.button`
    position:fixed;
    right:5px;
    top:5px;
    width:30px;
    height:30px; 
    border-radius:8px;
    border:none;
    background:transparent;
    font-weight:bolder;
`
const Content = styled.div`
    height:100%;
    width:100%;  
    background:white;
    border:1px solid #94e7d5;
    padding:10px;
    border-radius:10px;
    overflow-y:scroll;

`
export default function Modal(props) {
    if(!props.showModal) return null  
  return reactDom.createPortal(
    <>  
        <Overlay onClick={props.closeModal}></Overlay> 
        <Container>
        <Button onClick={props.closeModal}>X</Button>

            <Content>       
             {props.content} 
            </Content>
        </Container>
    </>,
    document.getElementById('modal')
  ) 
} 