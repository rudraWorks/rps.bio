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
    background:aliceblue;
    color:black;
    border-radius:5px;
    padding:5px;
    margin-right:10px;
    margin-top:5px;
    min-width:80px;   
    text-align:center;
    border:1px solid #d5dadf;
`
function Skills({array}) {
  return (
    <Container>
        {
            array.map((item)=><Box key={item}>{item}</Box>)
        }
    </Container>
  )
}

export default Skills