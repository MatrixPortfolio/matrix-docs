module.exports = {
  siteMetadata: {
    title: 'Easiest app to track cryptocurrencies, Bitcoin, Ethereum - Matrix Portfolio',
    description: 'Matrix Portfolio is the easiest and the most user-friendly app designed to help you manage and track your investments in Bitcoin, Ethereum, and 2000+ other altcoins and crypto currencies automatically with auto syncing and other time saving features.',
    keywords: 'cryptocurrency, bitcoin, ethereum, altcoin, crypto, investment, portfolio'
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'img',
      }
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
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
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/img/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-netlify-cache', // allows caching on netlify to reduce subsequent build times
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
