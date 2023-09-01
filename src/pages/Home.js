import React from 'react'
import Container from '../components/ContentContainer'
import PageHeading from '../components/PageHeading'

function Home() {
  return (
    <Container>
      <PageHeading> 🏠 Home</PageHeading>
      <p style={{ fontSize: '25px' }}>
      <img style={{ width: '130px'}} src='/assets/m3bg.png' />
    <br/>
        My name is Rudra, and I am a passionate web developer with a focus on creating accessible, enjoyable, and feature-rich web applications. I believe in the power of small, consistent improvements to drive progress and success. Whether working with established technologies or exploring the cutting-edge, I am always eager to learn and innovate.
        <br />
        One of the things that sets me apart as a developer is my focus on accessibility. I believe that all web applications should be designed to be inclusive and usable by everyone, regardless of their abilities or disabilities. To achieve this goal, I follow industry best practices and strive to stay up-to-date with the latest accessibility standards and guidelines to ensure that my work is always compliant.
      </p>

    </Container>
  )
}

export default Home


// util,stream tls net http2 url assert https http fs