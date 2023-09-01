import React,{useState} from 'react'
import styled from 'styled-components'
import Modal from '../portals/Modal'

const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    margin-top:5px;
    @media only screen and (max-width: 600px) {
      justify-content:center;
    }
`
const Box = styled.div`
  background: #f1f1f1;
  color: black;
  border-radius: 5px;
  padding: 5px;
  margin:10px;
  min-width: 80px;
  text-align: center;
  border: 1px solid #dfdbdb;
  display: flex;
  flex-direction: column;
  align-items:center;
  cursor:pointer;
  &:hover{
    background:#c9d2d9;
  }
`
export default function Projects({ array }) {

  const [showModal,setShowModal] = useState(false)
  const [content,setContent] = useState(null)

  return (
    <Container>   
      <Modal showModal={showModal}  closeModal={()=>setShowModal(false)} content={content} />
      {   
        array.map((item) =>
          <Box key={item.name} onClick={()=>{setShowModal(true);setContent(item.projectDescription)}}> 
            <img style={{ width: '150px', height: '150px',marginBottom:'5px' }} src={item.img} />
            {item.name}
          </Box>
        )
      }
    </Container>
  )
} 

