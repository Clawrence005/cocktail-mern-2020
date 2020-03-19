import React from 'react';

const RocksSVG = (props) => {
  return (
    <svg className="rocks-glass" width="400" height="400" >
      <polygon points="200,60 250,190 160,210" stroke="black" strokeWidth="3" fill={props.color} />
    </svg>)
}

export default RocksSVG;