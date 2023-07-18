import React from 'react'
import Container from '../components/ContentContainer'
import PageHeading from '../components/PageHeading'
import Card from '../components/Card'
import Skills from '../components/Skills'

function About() {
  return (
    <Container>
      <PageHeading>📃 About</PageHeading>
      <Card>
        <h2>Quick Intro</h2>
        <img style={{ width: '100px', borderRadius: '4px' }} src='/assets/m3bg.png' />
        <p><b>Full Name:</b> Rudra Pratap Singh</p>
        <p><b>Nationality:</b> Indian</p>
        <p><b>Email:</b> merudra.official@gmail.com</p>
        <p><b>Phone:</b> +91 7309250579</p>
        <br/>


        <h2>Education</h2>
        <h3>Graduation</h3>
        <p>Madan Mohan Malaviya University of Technology, Gorakhpur, Uttar Pradesh</p>
        <p>2020 - 2024</p>

        <br />

        <h3>Intermediate</h3>
        <p>Kendriya Vidyalaya Mughalsarai, Chandauli, Uttar Pradesh</p>
        <p>2017-2019</p>

        <br />

        <h3>Matriculation</h3>
        <p>Kendriya Vidyalaya Mughalsarai, Chandauli, Uttar Pradesh</p>
        <p>2013-2017</p>


      </Card>
      <Card>
        <h2>Skills</h2>

        <h3>Languages</h3>
        <Skills array={['C++', 'Javascript', 'Python', 'HTML', 'CSS', 'Java']} />

        <br />

        <h3>Frameworks & Libraries</h3>
        <Skills array={['Nodejs', 'Expressjs', 'Reactjs', 'jQuery', 'Bootstrap', 'Material UI', 'Socket.io']} />

        <br />

        <h3>Tools</h3>
        <Skills array={['Git', 'Github', 'Mongoose(ODM)', 'Sequelize(ORM)']} />

        <br />

        <h3>Databases</h3>
        <Skills array={['MySQL', 'MongoDB']} />
      </Card>
    </Container>
  )
}

export default About