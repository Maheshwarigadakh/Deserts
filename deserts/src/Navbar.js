import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    
    <div className="navbar">
        Deserts
        <div className="navbar-links">
            <a href="/" className="navbar-link">Home</a>
            <a href="/about" className="navbar-link"> About</a>
            <a href="/contact" className="navbar-link"> Contact</a>

        </div>
    </div>

  )
}

export default Navbar