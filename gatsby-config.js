module.exports = {
  siteMetadata: {
    title: 'Frank Songyang Tan',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'frank-songyang-tan',
        short_name: 'tan',
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui',
        icon: 'src/images/tan.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',

    // Source plugins
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },

    // Transformer plugins
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
  ],
}
