import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
      <h1>Main nav</h1>
      <ul>
        <div className="nav-link-wrapper">
          <Link to={'/'} className="nav-link">Home Page</Link>
        </div>
        <div className="nav-link-wrapper">
          <Link to={'/users'} className="nav-link">Users Page</Link >
        </div>
        <div className="nav-link-wrapper">
          <Link to={'/cocktails'} className="nav-link">Cocktail Page</Link>
        </div>

      </ul>
    </div>
  )
}

export default Navigation;