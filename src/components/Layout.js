import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styled, { createGlobalStyle } from "styled-components"

// import "@fontsource/ibm-plex-sans"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import "@fontsource/inter/900.css"

const GlobalStyle = createGlobalStyle`

html, body, #root, .App {
  /* height: 100%; */
}

/* set base font size to 10px */
html {
  /* 62.5% of 16px base font size is 10px */
  font-size: 62.5%;
}

* {box-sizing: border-box;}

body {
  margin: 0;
  /* font-family: "IBM Plex Sans", sans-serif; */
  font-family: 'Inter', sans-serif;
  /* if we won't specify font-size of the body, font size of html will be used instead, which is 16px in this case.
  This way we can use 1em as 10px. If we'll specify the font-size of body and set it to 1.6rem, (which is 16px),
  1em will become 16px */
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.8);
  /* color: rgb(46, 53, 63); */
  font-weight: 500;
  line-height: 1.6;
  /* background-color: #dbdbdb; */
}

.gatsby-resp-image-figcaption {
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  /* font-style: italic; */
}

blockquote {
  border-left: 3px solid rgba(0, 0, 0, 0.2);
  padding-left: 0.5em;
  /* border-radius: 20px; */
  /* background: green; */
}

`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0, 768px) minmax(1em, 1fr);

  margin-top: 2.2em;
`

const Container = styled.div`
  /* font-weight: 600; */
  grid-column: 2/-2;
`
const Header = styled.header`
  font-weight: 700;
  font-size: 1.9rem;
  margin-bottom: 2.5em;
`

const Heading = styled.h1`
  color: #000;
  font-weight: 900;
  font-size: 4rem;
  line-height: 1.1;

  margin-top: 0;
  margin-bottom: 0.4em;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`

const NavLinkItem = styled.li`
  padding-right: 2rem;
`

const NavLink = styled(Link)`
  color: #000;
`

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <GridContainer>
      <Container>
        <GlobalStyle />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <Header>
          <StyledLink to="/">{data.site.siteMetadata.title}</StyledLink>
        </Header>
        {/* <nav>
          <NavLinks>
            <NavLinkItem>
              <NavLink to="/">Home</NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink to="/blog">Blog</NavLink>
            </NavLinkItem>
          </NavLinks>
        </nav> */}
        <main>
          <Heading>{pageTitle}</Heading>
          {children}
        </main>
      </Container>
    </GridContainer>
  )
}

export default Layout
