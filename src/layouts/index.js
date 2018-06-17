import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.scss'
import facebook from '../img/social-facebook.svg';
import twitter from '../img/social-twitter.svg';
import reddit from '../img/social-reddit.svg';
import medium from '../img/social-medium.svg';

const Layout = ({ children, data }) => (
  <div className="container">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Matrix Portfolio is the easiest and the most user-friendly app designed to help you manage and track your investments in Bitcoin, Ethereum, and 2000+ other altcoins and crypto currencies automatically with auto syncing and other time saving features.' },
        { name: 'keywords', content: 'cryptocurrency, bitcoin, ethereum, altcoin, crypto, investment, portfolio' },
      ]}
    />
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
      }
    }
  }
`
