import React from 'react'
import PageHeading from '../components/PageHeading'
import Container from '../components/ContentContainer'

// import { NotionAPI } from 'notion-client'
// import { NotionRenderer } from 'react-notion-x'
// const notion = new NotionAPI() 

// const recordMap = await notion.getPage('2936424d516444ef88a60093019d1d83')


function Notes() { 
  return ( 
    <Container>
        <PageHeading>Notes</PageHeading>
        <iframe src="https://www.notioniframe.com/notion/rcsjvy9zx19"></iframe>
    </Container> 
  )
}

export default Notes



// export default ({ recordMap }) => (
//   <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
// )