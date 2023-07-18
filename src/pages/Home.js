import React from 'react'
import Container from '../components/ContentContainer'
import PageHeading from '../components/PageHeading'

function Home() {
  return (
    <Container>
      <PageHeading> 🏠 Home</PageHeading>
      <p style={{fontSize:'25px'}}>
      Hello! I'm Rudra, a highly motivated and enthusiastic computer science student on a mission to unravel the mysteries of technology. From a young age, I've been captivated by the immense power and potential of computers to reshape our world.
      <br/><br/>
      Driven by my curiosity and a love for problem-solving, I find great joy in deciphering complex algorithms, crafting elegant code, and developing innovative software solutions. Through my studies, I've gained a solid foundation in key computer science principles such as data structures, algorithms, operating systems, DBMS and fullstack dev.
      <br/><br/>
      But computer science is not just about theoretical knowledge. It's about putting ideas into action. That's why I actively seek opportunities to apply my skills and expand my horizons.
      <br/><br/>
      What truly excites me is the potential of technology to make a positive impact on society. I envision a future where technological innovations improve lives, enhance industries, and contribute to sustainable development. I believe that through creativity, collaboration, and a deep understanding of computer science, we can shape this future together. 
      </p>

    </Container>
  )
}

export default Home