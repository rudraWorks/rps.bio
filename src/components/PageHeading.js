import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 
    background:white;
    position:sticky;
    top:0;
    display:flex;
    align-items:center;
    margin-bottom:20px;
    padding:5px;
    z-index:10;
    border-bottom:1px solid skyblue;

`

function PageHeading({children}) { 
    return (
        <Container>
            <h1>{children}</h1>
            {/* <hr /> */}
            <br />
        </Container>
    )
}

export default PageHeading