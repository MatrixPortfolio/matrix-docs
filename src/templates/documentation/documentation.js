import React from 'react';
import Helmet from 'react-helmet';
import styles from './styles.scss';
import Link from 'gatsby-link';

export default function DocTemplate({data}) {
  const {markdownRemark: doc} = data;

  return(
    <div className="docs-template">
      <section className="docs-navigation">
        <p className="docs-nav-heading">Connect Exchanges</p>
        <ul>
          <li><Link to="/coinbase">Coinbase</Link></li>
          <li><Link to="/binance">Binance</Link></li>
          {/* <li><Link to="/bitfinex">Bitfinex</Link></li> */}
          {/* <li><Link to="/bitstamp">Bitstamp</Link></li> */}
          <li><Link to="/bittrex">Bittrex</Link></li>
          {/* <li><Link to="/cryptopia">Cryptopia</Link></li> */}
          <li><Link to="/coinbase">GDAX</Link></li>
          {/* <li><Link to="/hitbtc">Hitbtc</Link></li> */}
          <li><Link to="/kraken">Kraken</Link></li>
          {/* <li><Link to="/poloniex">Poloniex</Link></li> */}
          {/* <li><Link to="/quadrigacx">QuadrigaCX</Link></li> */}
        </ul>
      </section>
      <div className="docs-content">
       <div className="docs-content-wrapper">
        <h1>{doc.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: doc.html}}></div>
        </div>
      </div>
    </div>
  );
};

export const docQuery = graphql`
  query DocByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`