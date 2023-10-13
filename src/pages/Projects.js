import React from 'react'
import Container from '../components/ContentContainer'
import PageHeading from '../components/PageHeading'
import styled from 'styled-components'
import Card from '../components/Card'
import ProjectsContainer from '../components/Projects'
import { beSocial, bookMazter, liveType } from '../utils/projectDescription'

const Ul = styled.ul`
  padding:20px;

`
const Project = styled.div`
  background:beige;
  padding:20px;
  border:1px solid lightgray;
  margin-top:30px;
  border-radius:10px;
`

const Img = styled.img`
  // width:100px;
  max-width:90%;
`

function Projects() {
  return (
    <Container>
      <PageHeading>🚀 Projects</PageHeading>

      <Project>

        <h2 style={{display:'flex',alignItems:'center'}}>      
           <Img style={{ width: '50px' }} src='/assets/projects/cardseralogo.png' />
           &nbsp;Cardsera
        </h2>
        <Ul>
          <li>This full-stack web app makes information retention more manageable by utilizing <strong>spaced repetition algorithms</strong>.</li>
          <li>
            It helps students to store information in flashcards, linking them with decks, and it offers <strong>daily recommendations</strong> for card review.
          </li>
          <li>
            It offers students the opportunity to track their <strong>daily progress</strong> and view statistics using dynamic graphs and charts.
          </li>
          <li>
            Students can <strong>collaborate</strong> by importing and exporting decks, promoting shared learning experience.
            It earned a prominent spot on <strong>ProductHunt</strong>, receiving enthusiastic endorsement with over <strong>50 upvotes</strong> from the community.
          </li>
          <li>

            Over <strong>60</strong> students have registered, emphasizing the platform’s growing user base and positive reception.

          </li>
        </Ul>

        <strong>Frontend</strong>: Reactjs
        <br />
        <strong>Backend</strong>: Nodejs, Expressjs, Mongoose
        <br />
        <strong>Database</strong>: Mongodb
        <br />
        <br />
        <strong>Backend server</strong>: AWS EC2 (for Express APIs)
        <br />
        <strong>Frontend server</strong>: Vercel
        <br />
        <strong>Live</strong>: <a href='https://www.cardsera.in' target='_blank'>www.cardsera.in</a>
        <br />
        <br />
        <center>
          <Img src='/assets/projects/carderabanner.png' />
          <br/>
          <Img src='/assets/projects/producthunt2.png' />

        </center>

      </Project>

    </Container>
  )
}


export default Projects

/*

function Projects() { 
  return ( 
    <Container>
      <PageHeading>🚀 Projects</PageHeading>
      <Card>
        <h2>Nodejs Apps</h2>
        <ProjectsContainer array={
          [
            {
              img:'https://rudrapratap.netlify.app/assests/bSocialLogo.PNG',
              name:'BeSocial',
              projectDescription:beSocial
            },
            {
              img:'https://rudrapratap.netlify.app/assests/liveType.PNG',
              name:'LiveType',
              projectDescription:liveType
            },
            {
              img:'https://static.vecteezy.com/system/resources/thumbnails/010/259/436/small/library-3d-illustration-png.png',
              name:'BookMazter',
              projectDescription:bookMazter
            },
            {
              img:'https://i.pinimg.com/564x/ef/98/63/ef9863650633fbe085d98943a9547022.jpg',
              name:'TypeMaster'
            },
            {
              img:'https://icon-library.com/images/stock-inventory-icon/stock-inventory-icon-6.jpg',
              name:'StockPiler'
            },
            {
              img:'https://cdn.pixabay.com/photo/2016/11/30/18/14/chat-1873536_1280.png',
              name:'ChatApp'
            },
            {
              img:'https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png',
              name:'WeatherApp'
            }
          ]
        
          } 
        />
 
      </Card> 

      <Card>
        <h2>Reactjs Apps</h2>
        <ProjectsContainer array={
          [
            {
              img:'https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676_960_720.png',
              name:'Todo'
            },
            {
              img:'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wtub67tk9ndru4ixd0zn.png',
              name:'PracticeHero'
            }
          ]
        
          } 
        />
 
      </Card> 


      <Card>
        <h2>Android Apps</h2>
        <ProjectsContainer array={
          [
            {
              img:'https://rudrapratap.netlify.app/assests/stack.webp',
              name:'StackGame'
            },
            {
              img:'https://rudrapratap.netlify.app/assests/voca.webp',
              name:'Voca'
            }
          ]
        
          } 
        />
 
      </Card> 

    </Container>
  )
}

*/

