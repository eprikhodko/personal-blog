import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styled, { createGlobalStyle } from "styled-components"

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
  /* font-family: 'Inter', sans-serif; */
  /* if we won't specify font-size of the body, font size of html will be used instead, which is 16px in this case.
  This way we can use 1em as 10px. If we'll specify the font-size of body and set it to 1.6rem, (which is 16px),
  1em will become 16px */
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  line-height: 1.6;
  /* background-color: #dbdbdb; */
}
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0, 700px) minmax(1em, 1fr);
`

const Container = styled.div`
  font-family: sans-serif;
  grid-column: 2/-2;
`

const Heading = styled.h1`
  /* color: rebeccapurple; */
  margin-bottom: 0;
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
        <header>{data.site.siteMetadata.title}</header>
        <nav>
          <NavLinks>
            <NavLinkItem>
              <NavLink to="/">Home</NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink to="/blog">Blog</NavLink>
            </NavLinkItem>
          </NavLinks>
        </nav>
        <main>
          <Heading>{pageTitle}</Heading>
          {children}
        </main>
      </Container>
    </GridContainer>
  )
}

export default Layout
