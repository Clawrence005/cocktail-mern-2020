import React from 'react';
import Cocktail from '../../components/Cocktail';

function NonClassicCocktail(props) {
  return (
    
    <div className="cocktail-list-container 
    non-classic-list">
<h2 className="section-title" >Non-Classic Cocktails</h2>
      <div className="cocktail-list-grid">
        {/* {props.children} */}
        {props.list.map((cocktail) => (
          <Cocktail
            key={cocktail._id}
            cocktailName={cocktail.cocktailName} creatorName={cocktail.creatorName}
            _id={cocktail._id}

            cocktailImage={cocktail.cocktailImage}
            isShaken={cocktail.isShaken}
            garnish={cocktail.garnish}
            ingredients={cocktail.ingredients}
            method={cocktail.method}
            glass={cocktail.glass}
          />
        ))}
      </div>
    </div>
  )
}

export default NonClassicCocktail;