import React from 'react';
import Helmet from 'react-helmet';
import styles from './styles.scss';
import Link from 'gatsby-link';

export default function DocTemplate({data}) {
  const {markdownRemark: doc} = data;

  return(
    <div className="docs-template">
      <section className="docs-navigation">
        <h2>Navigation</h2>
        <ul>
          <li><Link to="/binance/">Binance</Link></li>
          <li><Link to="/bittrex/">Bittrex</Link></li>
          <li><Link to="/bitfinex/">bitfinex</Link></li>
          <li><Link to="/hitbtc/">hitbtc</Link></li>
          <li><Link to="/poloniex/">poloniex</Link></li>
          <li><Link to="/kraken/">kraken</Link></li>
        </ul>
      </section>
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