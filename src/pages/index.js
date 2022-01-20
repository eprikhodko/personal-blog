// Step 1: Import React
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"

const StyledLink = styled(Link)`
  color: #4b5cf5;
`

// Step 2: Define your component
function IndexPage() {
  return (
    <main>
      <Layout pageTitle="Hello, World!">
        <p>
          My name is Evgeny Prikhodko, I&apos;m a web developer from
          Saint-Petersburg, Russia.{" "}
          <StyledLink to="/blog">
            <strong>Here you can find my blog</strong>
          </StyledLink>{" "}
          where I write and share the things I learn with every new project
          (currently in Russian only).
        </p>
        {/* <StaticImage
          alt="A man that feed dog from spoon"
          src="../images/man-and-dog.jpg"
        /> */}
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage
