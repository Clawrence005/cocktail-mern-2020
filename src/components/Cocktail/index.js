import React from 'react';

function Cocktail(props) {
  return (
    <div className="cocktail"
      key={props._id}>
      <h3>{props.cocktailName}</h3>
      <h4>  created by: {props.creatorName}</h4>
      <img
        src={props.cocktailImage}
        alt={"image-" + props.cocktailName}
        height="190px"
        width="auto"
      />
      <li>id: {props._id}</li>
      <strong>Ingredients</strong>
      {props.ingredients.map((subItem, index) =>

        <li key={index}>{subItem}</li>)}
      <p>  isShaken: {props.isShaken}</p>
      <p>garnish: {props.garnish}</p>
      <p>method: {props.method}</p>
      <p>glassware: {props.glass}</p>
    </div>
  )
}

export default Cocktail;
