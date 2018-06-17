module.exports = {
  siteMetadata: {
    title: 'Easiest app to track cryptocurrencies, Bitcoin, Ethereum - Matrix Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/docs`,
        name: 'docs',
      }
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-typography`,
    'gatsby-plugin-netlify-cache', // allows caching on netlify to reduce subsequent build times
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
