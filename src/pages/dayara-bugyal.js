import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default (props) => {
    return (
        <Layout>
            <img src={props.data.markdownRemark.frontmatter.image.childImageSharp.original.src}/>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
        </Layout>
    )
}

export const dayaraQuery = graphql`
{
    markdownRemark(frontmatter : {title : {regex: "/Dayara/"}}) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`