import React from 'react';

function NonClassicCocktail(props) {
  return (
    <div>
      <h2>NonClassicCocktail</h2>

      {props.list.map((cocktail) => (
        <div className="cocktail-div neumorphism-positive-template"
          key={cocktail._id}>
          <h3>{cocktail.cocktailName}</h3>
          <img
            src={cocktail.cocktailImage}
            alt={"image-" + cocktail.cocktailName}
            height="190px"
            width="auto"
          />
          <li>  id: {cocktail._id}</li>
          <strong>Ingredients</strong>
          {cocktail.ingredients.map((subItem, index) =>
            <li key={index}>{subItem}</li>)}
          <p>garnish: {cocktail.garnish}</p>
          <p>method: {cocktail.method}</p>
          <p>glassware: {cocktail.glass}</p>

        </div>
      ))}

    </div>
  )
}



export default NonClassicCocktail;