import React from 'react';
import Link from 'gatsby-link';
import Header from '../../components/Header';
import './styles.scss';

export default function DocTemplate({data}) {
  const {markdownRemark: doc} = data;

  return(
    <div className="docs-template">
      <Header siteTitle="Support" />
      <nav className="docs-navigation">
        <p className="docs-nav-heading">Connect Exchanges</p>
        <ul>
          <li><Link to="/exchanges/coinbase">Coinbase</Link></li>
          <li><Link to="/exchanges/binance">Binance</Link></li>
          {/* <li><Link to="/exchanges/bitfinex">Bitfinex</Link></li> */}
          {/* <li><Link to="/exchanges/bitstamp">Bitstamp</Link></li> */}
          <li><Link to="/exchanges/bittrex">Bittrex</Link></li>
          {/* <li><Link to="/exchanges/cryptopia">Cryptopia</Link></li> */}
          <li><Link to="/exchanges/coinbase">GDAX</Link></li>
          {/* <li><Link to="/exchanges/hitbtc">Hitbtc</Link></li> */}
          <li><Link to="/exchanges/kraken">Kraken</Link></li>
          {/* <li><Link to="/exchanges/poloniex">Poloniex</Link></li> */}
          {/* <li><Link to="/exchanges/quadrigacx">QuadrigaCX</Link></li> */}
        </ul>
      </nav>
      <div className="docs-content">
        <h1>{doc.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: doc.html}}></div>
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