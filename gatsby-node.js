const path = require('path');
exports.createPages = ({ graphql, actions }) => {
 const { createPage } = actions
 return graphql(`
  query {
        allMarkdownRemark {
          edges {
            node {
              id
            }
          }
        }   
  }
 `).then(result => {
    const blogs = result.data.allMarkdownRemark.edges
    blogs.forEach((blog) => {
        createPage({
            path: blog.node.id,
            component: path.resolve('src/templates/blog-template.js'),
            context: {
                id : blog.node.id
            }
        })         
    })
 })
}