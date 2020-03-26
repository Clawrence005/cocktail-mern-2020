import React from 'react';

function User(props) {
  return (
    <div className="user"
      key={props.id}>

      <img src={props.userImage}
        alt={"user-" + props.userName}
        className="user-pic" />
      <div className="user-pic-name">
        <h3>{props.userName}</h3>

        <h4>{props.email}</h4>
        <p>{props.id}</p>
        <p>{props.bio}</p>
      </div>
    </div>
  )
}

export default User;