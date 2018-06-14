import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({data}) => (
  <div style={{ maxWidth: 960, padding: 25 }}>
    <h1 style={{ fontSize: 24 }}>Welcome to the official documentation for Matrix Portfolio</h1>
    <Link to="/docs/">Visit Documentation</Link>
  </div>
);

export default IndexPage
