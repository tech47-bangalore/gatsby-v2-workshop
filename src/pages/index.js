import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


export default (props) => 
    <Layout> 
        {
            props.data.allMarkdownRemark.edges.map((trek, index) => {
                return <h4> { trek.node.frontmatter.title } </h4>
            })
        }
    </Layout>


export const query = graphql`
{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`