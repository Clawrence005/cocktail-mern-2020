import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
      <h1>Main nav</h1>
      <img src="../assets/img/defaultAvatar.svg" alt="my pic" />
      <h3>My Name</h3>
      <ul>
        {/* if signed in show my avatar */}
        <div className="nav-link-wrapper">
          <Link to={'/'} className="nav-link">Home Page</Link>
        </div>
        <div className="nav-link-wrapper">
          <Link to={'/users'} className="nav-link">Users Page</Link >
        </div>
        <div className="nav-link-wrapper">
          <Link to={'/cocktails'} className="nav-link">Cocktail Page</Link>
        </div>
        <div className="nav-link-wrapper">
          <Link to={'/userdashboard'} className="nav-link">My Dashboard</Link>
        </div>

      </ul>
    </div>
  )
}

export default Navigation;