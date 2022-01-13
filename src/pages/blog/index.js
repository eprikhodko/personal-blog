import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"

const StyledLink = styled(Link)`
  font-weight: 800;
  color: #162328;
  text-decoration: none;

  &:hover {
    color: #4f5969;
    text-decoration: underline;
  }
`

const PostTitle = styled.h2`
  margin-bottom: 0;
`

const Date = styled.p`
  margin-top: 0;
`

function BlogPage({ data }) {
  //   console.log(data)
  return (
    <Layout pageTitle="Recently Published:">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <PostTitle>
            <StyledLink to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
            </StyledLink>
          </PostTitle>
          <Date>{node.frontmatter.date}</Date>
          {/* <p>updated: {node.parent.modifiedTime}</p> */}
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`

export default BlogPage
