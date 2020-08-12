/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nx9cn2z55xuh`,
        accessToken: `8z3KoFlQM93UAkh5gIfC1nuxPIzoaS0jFub-hQLEV-w`,
      },
    },
  ],
}
