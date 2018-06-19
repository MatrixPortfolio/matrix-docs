import React from 'react';
import Img from "gatsby-image";

import logo from '../img/matrix-portfolio-logo.svg'
import './styles.scss';

const IndexPage = ({data}) => (
  <div className="container">
    <div className="wrapper">
      <img className="logo" src={logo} alt=""/>
      <h1>The <span>easiest</span> way to track your crypto investments.</h1>
      <p className="coming">Coming Soon (iOS & Android)</p>

      <div id="mc_embed_signup">
        <form action="https://matrixportfolio.us16.list-manage.com/subscribe/post?u=191aaef2a8e60afe888218666&amp;id=4185d212cc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Enter your email" />
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
          <div className="response" id="mce-error-response" style={{display:'none'}}></div>
          <div className="response" id="mce-success-response" style={{display:'none'}}></div>
          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
            <input type="text" name="b_191aaef2a8e60afe888218666_4185d212cc" tabIndex="-1" value="" />>
          </div>
        </form>
      </div>

      <Img className="matrix-mockup-image" sizes={data.mainImage.sizes} alt="Matrix Portfolio - Cryptocurrency, Bitcoin, Ethereum altcoin tracker" />
    </div>
  </div>
);

export default IndexPage

export const pageQuery = graphql`
  query mainImageQuery {
    mainImage: imageSharp(id: { regex: "/matrix-portfolio-app-mockups/" }) {
      sizes(maxWidth: 1260) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
  }
`
