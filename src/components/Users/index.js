import React from 'react';

function User(props) {
  return (
    <div className="user-wrapper">
      <h2>{props.userName}</h2>
      <p>{props._id}</p>
      <h4>{props.email}</h4>

      <p>{props.bio}</p>
      <p>{props.userImage}</p>
    </div>
  )
}

export default User;