import React from 'react';
// import { Link } from 'react-router-dom';
import Cocktail from '../../components/Cocktail';

function ClassicCocktail(props) {
  return (

    <div className="cocktail-list-container">
      <h2>Classic Cocktails</h2>
      <div className="cocktail-list-grid">
        {/* {props.children} */}
        {props.list.map((cocktail) => (
          <Cocktail {...props}
            cocktailName={cocktail.cocktailName}
            _id={cocktail._id}
            cocktailImage={cocktail.cocktailImage}
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

export default ClassicCocktail;