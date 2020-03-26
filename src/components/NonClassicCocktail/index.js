import React from 'react';

function NonClassicCocktail(props) {
  return (
    
    <div className="cocktail-list-container 
    non-classic-list 
">
      <h2>Non-Classic Cocktail</h2>
  <div className="cocktail-list-grid"> 
      {props.list.map((cocktail) => (
        <div className="cocktail-div "
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
    </div>
  )
}

export default NonClassicCocktail;