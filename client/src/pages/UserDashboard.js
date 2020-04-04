import React from 'react';

function UserDashboard() {
  return (
    <div className="user-dashboard">

      <div className="user-dashboard-content">
        <h1>Dashboard</h1>
        <img src="../../assets/img/defaultAvatar.svg" alt="avatar" />
        <h1>User Name</h1>
        <p>Bio: </p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <h3>sub title</h3>
        <h4>My Cocktail Contributions</h4>
        <div className="dashboard-cocktails">
          {/* <ul> */}
          <img src="./assets/img/cocktail1.jpeg" alt="cocktail" width="200px" height="auto" />
          <p>Cocktail 1</p>
          <img src="./assets/img/cocktail1.jpeg" alt="cocktail" width="200px" height="auto" />
          <p>Cocktail 2</p>
          <img src="./assets/img/cocktail1.jpeg" alt="cocktail" width="200px" height="auto" />
          <p>Cocktail 3</p>
          <img src="./assets/img/cocktail1.jpeg" alt="cocktail" width="200px" height="auto" />
          <p>Cocktail 4</p>
          {/* </ul> */}
        </div>
      </div>
    </div>
  )
}
export default UserDashboard;