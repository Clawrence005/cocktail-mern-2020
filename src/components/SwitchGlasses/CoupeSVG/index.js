import React from 'react';

const CoupeSVG = (props) => {
  return (
    <svg className="circle" height="100" width="100">
      <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill={props.color} />
    </svg>
  )
}

export default CoupeSVG;