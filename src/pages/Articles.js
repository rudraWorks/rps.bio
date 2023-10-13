import React, { useState, useEffect } from 'react'
import Container from '../components/ContentContainer'
import PageHeading from '../components/PageHeading'
import styled from 'styled-components'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

const BlogDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;

`

const Article = styled.div`

    border-radius:5px;
    margin:10px;
    padding:5px;
    cursor:pointer;
    display:flex;
    flex-direction:column;
    // justify-content:center;
    // align-items:center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    margin:20px;
    &:hover {
        box-shadow: 0 5px 10px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
    }
    @media only screen and (max-width: 600px) {
    }
    height:130px;
    background:aliceblue;
    max-width:300px;
`
const Img = styled.img`
width:250px;
 max-width:95%;
`

function Articles() {
  // https://dev.to/api/articles?username=merudra754
  const [articles, setArticles] = useState([])
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    try {
      async function loadArticles() {
        let res = await fetch('https://dev.to/api/articles?username=merudra754')
        let data = await res.json()
        setArticles(data)
        setShowLoader(false)
      }
      loadArticles()
    }
    catch (e) {

    }

  }, [])

  return (
    <Container>
      <PageHeading>✒️ Articles</PageHeading>
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          showLoader &&
          [1, 2, 3, 4, 5, 6].map((temp) =>
            <Skeleton key={temp} style={{ width: '270px', height: '170px', margin: '20px' }} />
          )
        }
      </div>
      <BlogDiv>

        {
          articles.map(item =>
            <a key={item.id} href={item.url} target='_blank' style={{ textDecoration: "none" }} >

              <Article>

                {/* <Img src={item.social_image}></Img> */}
                <div style={{marginTop:'20px'}}>
                  <h3>{item.title}</h3>
                </div>

                <div style={{ display: "flex" , justifyContent:'flex-start',width:'100%',paddingLeft:'5px',paddingRight:'5px',marginTop:'auto'}}>

                  <span>
                    🧡 {item.public_reactions_count} &nbsp;
                    ✍️ {item.comments_count}
                  </span>

                  <span style={{ marginLeft: "auto" }}>
                    📅 {new Date(item.created_at).getDate()}/{new Date(Date.parse(item.created_at)).getMonth() + 1}/{new Date(Date.parse(item.created_at)).getFullYear()}
                  </span>

                </div>

              </Article>

            </a>

          )}
      </BlogDiv>
    </Container>
  ) 
}

export default Articles