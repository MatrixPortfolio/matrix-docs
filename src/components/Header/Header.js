import React from 'react'
import Link from 'gatsby-link'
import logo from "./matrix-logo-white-nobg.svg";
import './styles.scss';

const Header = ({ siteTitle }) => (
  <div className="header">
    <Link
      to="/"
      style={{
        color: '#C697EF', 
        textDecoration: 'none',
      }}
    >
      <img src={logo} className="nav-logo" alt="logo" />
      <h1 className="title">{siteTitle}</h1>
    </Link>
    <nav className="header-nav">
      <Link to="/docs/" style={{ color: '#fff' }}>Docs</Link>
    </nav>
  </div>
)

export default Header
