import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../../components/Layout"

const Date = styled.p`
  font-size: 1.9rem;
  font-weight: 500;
  margin-bottom: 0.2em;
  /* color: #000; */
`

const DateUpdated = styled.p`
  font-size: 1.9rem;
  font-weight: 500;
  margin-top: 0;
`

function BlogPost({ data }) {
  const heroImage = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Date>posted on {data.mdx.frontmatter.date}</Date>
      <DateUpdated>
        {/* show date updated only if it is provided by frontmatter */}
        {data.mdx.frontmatter.dateUpdated &&
          `updated: ${data.mdx.frontmatter.dateUpdated}`}{" "}
      </DateUpdated>
      <GatsbyImage
        image={heroImage}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dateUpdated(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPost
