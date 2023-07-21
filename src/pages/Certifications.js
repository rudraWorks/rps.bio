import React from 'react'
import PageHeading from '../components/PageHeading'
import Container from '../components/ContentContainer'
import styled from 'styled-components'

function Certifications() {
    return (
        <Container>
            <PageHeading> 🎖️ Certificates</PageHeading>
            <center>
                <Img src='/assets/certs/algorithmic toolbox.jpg' />
                <Img src='/assets/certs/nptelalgo.jpg' />

                <Img src='/assets/certs/nodeudemy.jpg' />
                <Img src='/assets/certs/dsaudemy.jpg' />
                <Img src='/assets/certs/react.jpg' />
            </center>


        </Container>
    )
}

export default Certifications

const Img = styled.img`
    width:500px;
    max-width:90%;
    margin:10px;
    border:1px solid black;
`