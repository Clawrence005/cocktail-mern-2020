import React from 'react';

function SvgCheckbox(props) {
  return (
    <div className="svgCheckbox">
      <label>{props.name}</label>
      <input
        type="checkbox"
        name={`has${props.name}`}

        value={`has${props.name}`}
      />
    </div>
  )
}
export default SvgCheckbox;