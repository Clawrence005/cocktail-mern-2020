import React from 'react';
import User from '../../components/User';

function UserContainer(props) {
  return (
    <div className="users-wrapper">
      <h1>User Container</h1>
      {props.list.map((user) => (
        <User
          key={user._id}
          userName={user.userName}
          id={user._id}
          email={user.email}
          bio={user.bio}
          userImage={user.userImage}
        />
      ))}
    </div>
  )
}

export default UserContainer