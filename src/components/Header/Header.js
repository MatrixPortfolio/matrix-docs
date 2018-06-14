import React from 'react'
import Link from 'gatsby-link'
import logo from "./matrix-logo-white-nobg.svg";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple'
    }}
  >
    <div
      style={{
        padding: '1.45rem 1.0875rem',
      }}
    >
      <img src={logo} className="nav-logo" alt="logo" style={{ display: 'inline-block', marginBottom: 0, marginRight: 6, maxWidth: 120 }}/>
      <h1 style={{ margin: 0, fontSize: 18, display: 'inline-block', letterSpacing: 0.02, fontWeight: 200 }}>
        <Link
          to="/"
          style={{
            color: '#C697EF', 
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
