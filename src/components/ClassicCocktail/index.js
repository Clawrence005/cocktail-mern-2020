import React from 'react';
import pic from '../../assets/images/cocktail1.jpeg';

function ClassicCocktail(props) {
  return (
    <div>
      <h2>Classic Cocktails</h2>

      {props.list.map((cocktail) => (
        <div key={cocktail.cocktailId}>
          <h3>{cocktail.cocktailName}</h3>
          <li>id: {cocktail.cocktailId}</li>
          {/* <li>{cocktail.ingredients}</li> */}
          <strong>Ingredients</strong>
          {cocktail.ingredients.map((subItem) =>
            <li>{subItem}</li>)}
          <p>garnish: {cocktail.garnish}</p>
          <p>method: {cocktail.method}</p>
          <p>glassware: {cocktail.glass}</p>

          <img

            src={cocktail.image}
            alt={"image-" + cocktail.cocktailName}
            height="190px"
            width="190px"
          />
        </div>
      ))}
    </div>
  )
}

export default ClassicCocktail;