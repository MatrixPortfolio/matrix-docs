import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({data}) => (
  <div className="container">
    <div style={{ maxWidth: 960, padding: 25, textAlign: 'center', margin: 'auto' }}>
      <h1 style={{ fontSize: 24 }}>The easiest way to track your crypto investments</h1>
      <p className="coming">Coming Soon</p>
      <form name="contact" method="POST" netlify>
        <input name="email" type="email" placeholder="Enter your email" required />
        <button type="submit">Join Waitlist</button>
      </form>
      <img src="http://placehold.it/800x600" alt=""/>
    </div>
  </div>
);

export default IndexPage
