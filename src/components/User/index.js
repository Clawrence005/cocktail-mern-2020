import React from 'react';

function User(props) {
  return (
    <div className="user"
      key={props.id}>
      <div className="user-pic-name">
        <img src={props.userImage}
          alt={"user-" + props.userName}
          className="user-pic" />
        <h2>{props.userName}</h2>
      </div>
      <h4>{props.email}</h4>
      <p>{props.id}</p>
      <p>{props.bio}</p>

    </div>
  )
}

export default User;