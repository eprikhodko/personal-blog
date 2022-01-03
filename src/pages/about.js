// Step 1: Import React
import * as React from "react"
import Layout from "../components/Layout"
// Step 2: Define your component
function AboutPage() {
  return (
    <main>
      <Layout pageTitle="About">
        <p>
          Hi there! I&apos;m creator of this site, which I built with Gatsby.
        </p>
      </Layout>
    </main>
  )
}
// Step 3: Export your component
export default AboutPage
