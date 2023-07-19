import React, { useState, useEffect } from 'react'
import Container from '../components/ContentContainer'
import PageHeading from '../components/PageHeading'
import styled from 'styled-components'


const BlogDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    @media only screen and (max-width: 600px) {
      justify-content:center;
    }
    margin-bottom:20px;
    justify-content: space-around;
`

const Article = styled.div`

    border-radius:5px;
    margin:10px;
    padding:5px;
    cursor:pointer;

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`


function Blogs() {
  // https://dev.to/api/articles?username=merudra754
  const [articles, setArticles] = useState([])
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {

    async function loadArticles() {
      let res = await fetch('https://dev.to/api/articles?username=merudra754')
      let data = await res.json()
      setArticles(data)
      setShowLoader(false)
    }
    loadArticles()

  }, [])

  return (
    <Container>
      <PageHeading>✒️ Blogs</PageHeading>
      <BlogDiv>

        {showLoader && <h3>Loading...</h3>}

        {articles.map(item => <a href={item.url} target='_blank' style={{ textDecoration: "none" }} ><Article key={item.social_image}>
          <img style={{ width: "250px", borderRadius: "5px" }} src={item.social_image}></img>
          <br></br>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "15px" }}>🧡 {item.public_reactions_count}</span>   <span>✍️ {item.comments_count}</span>
            <span style={{ marginLeft: "auto" }}>📅 {new Date(item.created_at).getDate()}/{new Date(Date.parse(item.created_at)).getMonth() + 1}/{new Date(Date.parse(item.created_at)).getFullYear()}</span>
          </div>
        </Article></a>)}
      </BlogDiv>
    </Container>
  )
}

export default Blogs