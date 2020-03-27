import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">

      <h1>Logo</h1>
      <h1>Shake/Stir</h1>
      <br /><br /><br /><br /><br /><br />

      <p>Home</p>     <br /><br /><br /><br />
      <p>Users</p>     <br /><br /><br /><br />
      <p>Create a Recipe</p>     <br /><br /><br /><br />
      <p>Cocktails</p>     <br /><br /><br /><br />
      <p>Classic Cocktails</p>     <br /><br /><br /><br />
      <p>Cocktails</p>

      {/* <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/cocktails">classics</Link></li> */}



    </div>
  )
}

export default Navigation;