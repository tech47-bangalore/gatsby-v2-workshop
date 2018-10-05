module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve : `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `markdown-pages`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
