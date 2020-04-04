import React from 'react';

function HomePage() {
  return (
    <div className="home-page-main">
      <h1>HomePage</h1>
      <a href="/signin">sign in</a>
      <h3>Routes</h3>
      <li>  <a href="/users">All Users</a></li>
      <li><a href="/userdashboard">User Dashboard</a></li>
      <li><a href="/cocktails">All Cocktails</a></li>


      <div>
        Hero
</div>
    </div>
  )
}
export default HomePage;