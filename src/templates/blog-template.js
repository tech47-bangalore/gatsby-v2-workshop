import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from 'gatsby-image'

export default (props) => {
    return (
        <Layout>
            <p> Time to read: {props.data.markdownRemark.timeToRead} min</p>
            <Image fluid={props.data.markdownRemark.frontmatter.image.childImageSharp.fluid}/>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
        </Layout>
    )
}

export const dayaraQuery = graphql`
query($id: String!){
    markdownRemark(id: {eq: $id}) {
        timeToRead
        html
        frontmatter {
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
  
  }
`