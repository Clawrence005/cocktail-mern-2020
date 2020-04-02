import React from 'react';

function User(props) {
  return (
    <div className="user" key={props.id}>

      <div className="user-img-wrapper">
        <img src={props.userImage}
          alt={"user-" + props.userName}
          className="user-pic"
        />
      </div>

      <div className="user-details">
        <h3>{props.userName}</h3>
        <h4>{props.email}</h4>
        <p>{props.id}</p>
        <p>{props.bio}</p>
        <p>{props.cocktailName}</p>
      </div>

    </div>
  )
}

export default User;