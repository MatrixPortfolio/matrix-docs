import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.scss'
import favicon from '../img/favicon.ico';
import facebook from '../img/social-facebook.svg';
import twitter from '../img/social-twitter.svg';
import reddit from '../img/social-reddit.svg';
import medium from '../img/social-medium.svg';

const Layout = ({ children, data }) => (
  <div className="container">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: `${data.site.siteMetadata.title}` },
        { name: 'keywords', content: `${data.site.siteMetadata.keywords}` },
      ]}
    >
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    {children()}
    <div className="footer">
      <p>Made with ❤️ in Toronto.</p>
      <ul className="footer-social">
        <li><a href="https://facebook.com/matrixportfolio"><img src={facebook} alt=""/></a></li>
        <li><a href="https://twitter.com/matrixportfolio"><img src={twitter} alt=""/></a></li>
        <li><a href="https://reddit.com/r/matrixportfolio"><img src={reddit} alt=""/></a></li>
        <li><a href="https://medium.com/@matrixportfolio"><img src={medium} alt=""/></a></li>
      </ul>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query HelmetQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
