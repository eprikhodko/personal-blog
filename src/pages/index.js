// Step 1: Import React
import * as React from "react"
import Layout from "../components/Layout"

// Step 2: Define your component
function IndexPage() {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I&apos;m making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage
