import React from 'react'
import Container from '../components/ContentContainer'
import PageHeading from '../components/PageHeading'
import Card from '../components/Card'
import ProjectsContainer from '../components/Projects'

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
              name:'BeSocial'
            },
            {
              img:'https://rudrapratap.netlify.app/assests/liveType.PNG',
              name:'LiveType'
            },
            {
              img:'https://static.vecteezy.com/system/resources/thumbnails/010/259/436/small/library-3d-illustration-png.png',
              name:'BookMazter'
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

export default Projects