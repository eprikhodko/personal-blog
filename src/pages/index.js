// Step 1: Import React
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/Layout"

// Step 2: Define your component
function IndexPage() {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>
          Hi! My name is Evgeny Prikhodko, I&apos;m a web developer from
          Saint-Petersburg, Russia. Here you can find my{" "}
          <Link to="/blog">blog</Link> where I write about what I learned during
          my web developer learning jorney.
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
