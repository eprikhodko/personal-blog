// Step 1: Import React
import { Link } from "gatsby"
import * as React from "react"

// Step 2: Define your component
function IndexPage() {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I&apos;m making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage
