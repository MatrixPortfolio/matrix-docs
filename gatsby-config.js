module.exports = {
  siteMetadata: {
    siteUrl: `https://matrixportfolio.com`,
    title: 'Easiest app to track cryptocurrencies, Bitcoin, Ethereum - Matrix Portfolio',
    description: 'Matrix Portfolio is the easiest and the most user-friendly app designed to help you manage and track your investments in Bitcoin, Ethereum, and 2000+ other altcoins and crypto currencies automatically with auto syncing and other time saving features.',
    keywords: 'cryptocurrency, bitcoin, ethereum, altcoin, crypto, investment, portfolio'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typography`,
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/docs`,
        name: 'docs',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'img',
      }
    },
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112800552-2",
        exclude: ["/preview/**", "/admin/**"],
      },
    },
    'gatsby-plugin-netlify-cache', // allows caching on netlify to reduce subsequent build times
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
