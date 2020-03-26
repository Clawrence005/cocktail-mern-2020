import React from 'react';

function User(props) {
  return (
    <div className="user"
      key={props.id}>
      <h2>{props.userName}</h2>
      <p>{props.id}</p>
      <h4>{props.email}</h4>
      <p>{props.bio}</p>
      <img src={props.userImage}
        alt={"user-" + props.userName} />
    </div>
  )
}

export default User;