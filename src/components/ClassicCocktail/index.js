import React from 'react';

function ClassicCocktail(props) {
  return (
    <div>
      <h2>Classic Cocktail</h2>

      {props.list.map((cocktail) => (
        <div key={cocktail.cocktailId}>
          <h4>{cocktail.cocktailName}</h4>
          <li>{cocktail.cocktailId}</li>
          <li>{cocktail.ingredients}</li>
          <p>ingredients</p>
          {cocktail.ingredients.map((subItem) =>
            <li>{subItem}</li>)}
        </div>

      ))}

    </div>
  )
}

export default ClassicCocktail;