import React from 'react';

function Cocktail(props) {
  return (
    <div className="cocktail-outer"
      key={props._id}>
      <div className="cocktail-inner">
        <h3 className="cocktail-title">{props.cocktailName}</h3>
        <h4>  created by: {props.userName}</h4>
        <img
          className="cocktail-image"
          src={props.cocktailImage}
          alt={"image-" + props.cocktailName}
        />
        <h4>  created by: {props.userName}</h4>
        <br />
        <li>id: {props._id}</li>
        <strong>Ingredients:</strong>
        {props.ingredients.map((subItem, index) =>

          <p key={index}>{subItem}</p>)}
        {/* <p>  isShaken: {props.isShaken}</p> */}
        <span><strong>method:  </strong>{props.method}</span>
        <br />
        <span><strong>garnish:  </strong>{props.garnish}</span>
        <br />
        <span><strong>glassware:  </strong>{props.glass}</span>
      </div>
    </div >
  )
}

export default Cocktail;
