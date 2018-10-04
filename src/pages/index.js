import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = (props) => {
  const { edges } = props.data.allMarkdownRemark
  return (
  <Layout>
    {
      edges.map((md, index) => <div key={index}>
        <p> { md.node.frontmatter.title } </p>
      </div>)
    }
  </Layout>
)
  }

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
        }
        html
      }
    }
  }
}
`
