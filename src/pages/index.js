import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'


export default (props) => 
    <Layout> 
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
        {
            props.data.allMarkdownRemark.edges.map((trek, index) => {
                return (
                    <div style={{
                        padding: '25px',
                        width: '200px',
                        margin: '16px',
                        borderStyle: 'solid',
                        borderWidth: 'thin',
                    }}>
                        <h4> { trek.node.frontmatter.title } </h4>
                        <Link to={trek.node.id}> 
                            <Image fixed={trek.node.frontmatter.image.childImageSharp.fixed} />
                        </Link>
                        <p> { trek.node.excerpt } </p>
                    </div>
                )

            })
        }

        </div>
       
    </Layout>


export const query = graphql`
{
    allMarkdownRemark {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              image {
                childImageSharp {
                  fixed(width: 200, height: 200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
}
`