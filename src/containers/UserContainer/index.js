import React from 'react';
import User from '../../components/User';

function UserContainer(props) {
  return (
    <div className="users-container">
      <h2 className="section-title" >User Container</h2>
      <div className="users-wrapper">
        {props.list.map((user) => (
          <User
            key={user._id}
            userImage={user.userImage}
            userName={user.userName}
            id={user._id}
            email={user.email}
            bio={user.bio}

          />
        ))}
      </div>  </div>
  )
}

export default UserContainer