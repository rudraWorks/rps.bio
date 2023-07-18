import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    // background:gray;
    width:100%;
    margin-top:5px;
`
const Box = styled.div`
    background:skyblue;
    color:white;
    border-radius:5px;
    padding:5px;
    margin-right:10px;
    margin-top:5px;
    min-width:80px;   
    text-align:center;
    border:1px solid blue;
    display:flex;
    flex-direction:column;

`
export default function Projects({array}) {
  return (
    <Container>
        {
            array.map((item)=>
               <Box key={item}>
                <img style={{width:'120px',height:'120px'}} src={item.img}/>
                <div>{item.name}</div>
               </Box>
            )
        }
    </Container>
  ) 
}

