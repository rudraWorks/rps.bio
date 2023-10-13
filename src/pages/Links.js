import React from 'react'
import Container from '../components/ContentContainer'
import PageHeading from '../components/PageHeading'
import { Link } from 'react-router-dom'
import { Tooltip as ReactTooltip } from "react-tooltip";

function Contact() {
  return (
    <Container>
      <PageHeading> 🔗 Links</PageHeading>

      <h2>Social</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>


        <Link data-tooltip-id='twitter' style={LINK_STYLE} to='https://twitter.com/merudra754' target='_blank'>
          <img style={IMG_STYLE} src='/assets/links/twitter.png' />
        </Link>

        <Link data-tooltip-id='instagram' style={LINK_STYLE} to='https://www.instagram.com/merudra754/' target='_blank'>
          <img style={IMG_STYLE} src='/assets/links/insta.webp' />
        </Link>

      </div>

      <br />
      <h2>Tech</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>

        <Link data-tooltip-id='dev' style={LINK_STYLE} to='https://dev.to/merudra754' target='_blank'>
          <img style={IMG_STYLE} src='/assets/links/dev.png' />
        </Link>

        <Link data-tooltip-id='leetcode' style={LINK_STYLE} to='https://leetcode.com/rudra_pratap1008/' target='_blank'>
          <img style={IMG_STYLE} src='/assets/links/lc.png' />
        </Link>

        <Link data-tooltip-id='github' style={LINK_STYLE} to='https://github.com/rudraWorks' target='_blank'>
          <img style={IMG_STYLE} src='/assets/links/github.webp' />
        </Link>


        <Link data-tooltip-id='linkedin' style={LINK_STYLE} to='https://www.linkedin.com/in/merudra/' target='_blank'>
          <img style={IMG_STYLE} src='/assets/links/li.png' />
        </Link>

        <Link data-tooltip-id='producthunt' style={LINK_STYLE} to='https://www.producthunt.com/@merudra' target='_blank'>
          <img style={IMG_STYLE} src='/assets/links/producthunt.avif' />
        </Link>

        <ReactTooltip
          id="twitter"
          place="bottom"
          content="Twitter"
        />

        <ReactTooltip
          id="instagram"
          place="bottom"
          content="Instagram"
        />

        <ReactTooltip
          id="dev"
          place="bottom"
          content="Dev.to"
        />

        <ReactTooltip
          id="leetcode"
          place="bottom"
          content="Leetcode"
        />

        <ReactTooltip
          id="github"
          place="bottom"
          content="Github"
        />

        <ReactTooltip
          id="linkedin"
          place="bottom"
          content="Linkedin"
        />
        <ReactTooltip
          id="producthunt"
          place="bottom"
          content="ProductHunt"
        />

      </div>










    </Container>
  )
}

export default Contact

const IMG_STYLE = {
  width: '100px',
}

const LINK_STYLE = {
  margin: '20px'
}