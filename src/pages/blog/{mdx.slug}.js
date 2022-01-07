import * as React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"

const Subtitle = styled.h2`
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
`

function BlogPost({ data }) {
  const heroImage = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Subtitle>{data.mdx.frontmatter.subtitle}</Subtitle>
      <p>{data.mdx.frontmatter.date}</p>
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
        subtitle
        date(formatString: "MMMM DD, YYYY")
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
