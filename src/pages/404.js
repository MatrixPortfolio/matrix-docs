import React from 'react'

const NotFoundPage = () => (
  <div style={{ padding: 30 }}>
    <h1>404 Not Found</h1>
    <p>Sorry, this page may have moved or doesn't exist...double check the link?</p>
    <a href="/" style={styles.button}>Go Home</a>
  </div>
)

const styles = {
  'button': {
    display: 'inline-block',
    background: '#9B51E0',
    borderRadius: '2px',
    border: 'none',
    color: '#fff',
    fontSize: '16px', 
    fontFamily: `'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    textDecoration: 'none',
    padding: '10px 20px',
    cursor: 'pointer'
  }
}
export default NotFoundPage
