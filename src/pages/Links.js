import React from 'react'
import Container from '../components/ContentContainer'
import PageHeading from '../components/PageHeading'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <Container>
      <PageHeading> 🔗 Links</PageHeading>

      <h2>Social</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>


        <Link to='https://twitter.com/merudra754' target='_blank'>
          <img style={IMG_STYLE} src='/assets/links/twitter.png' />
        </Link>

        <Link to='https://www.instagram.com/merudra754/' target='_blank'>
          <img style={IMG_STYLE} src='/assets/links/insta.webp' />
        </Link>

      </div>

      <br />
      <h2>Tech</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>

        <Link to='https://dev.to/merudra754' target='_blank'>
          <img style={IMG_STYLE} src='/assets/links/dev.png' />
        </Link>

        <Link to='https://leetcode.com/rudra_pratap1008/' target='_blank'>
          <img style={IMG_STYLE} src='/assets/links/lc.png' />
        </Link>



        <Link to='https://www.linkedin.com/in/merudra/' target='_blank'>
          <img style={IMG_STYLE} src='/assets/links/li.png' />
        </Link>



      </div>










    </Container>
  )
}

export default Contact

const IMG_STYLE = {
  width: '100px',
  margin: '20px'
}