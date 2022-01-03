import * as React from "react"
import { Link } from "gatsby"

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

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`

const Heading = styled.h1`
  /* color: rebeccapurple; */
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
  return (
    <Container>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <NavLink to="/">Home</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="/about">About</NavLink>
          </NavLinkItem>
        </NavLinks>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  )
}

export default Layout
