import React from 'react';
import Helmet from 'react-helmet';
import styles from './styles.scss';

export default function DocTemplate({data}) {
  const {markdownRemark: doc} = data;

  return(
    <div className="docs-template">
      <section className="docs-navigation">Navigation</section>
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