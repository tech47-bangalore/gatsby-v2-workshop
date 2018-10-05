const path = require('path');
exports.createPages = ({ graphql, actions }) => {
 const { createPage } = actions

 createPage({
     path: '/blog',
     component: path.resolve('src/templates/blog-template.js')
 })

}