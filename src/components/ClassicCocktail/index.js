import React from 'react';

function ClassicCocktail(props) {
  return (

    <div>
      <h2>Classic Cocktails</h2>

      {props.list.map((cocktail) => (
        <div className="cocktail-div"
          key={cocktail.cocktailId}>
          <h3>{cocktail.cocktailName}</h3>
          <img
            src={cocktail.image}
            alt={"image-" + cocktail.cocktailName}
            height="190px"
            width="auto"
          />
          <li>id: {cocktail.cocktailId}</li>
          <strong>Ingredients</strong>
          {cocktail.ingredients.map((subItem) =>
            <li>{subItem}</li>)}
          <p>garnish: {cocktail.garnish}</p>
          <p>method: {cocktail.method}</p>
          <p>glassware: {cocktail.glass}</p>


        </div>
      ))}
    </div>
  )
}

export default ClassicCocktail;