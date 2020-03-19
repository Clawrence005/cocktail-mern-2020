import React from 'react';

const CollinsSVG = (props) => {

  return (
    <svg className="square" width="400" height="110">
      <rect width="290" height="90" stroke="black" strokeWidth="3" fill={props.color} />
    </svg>)

}


export default CollinsSVG;