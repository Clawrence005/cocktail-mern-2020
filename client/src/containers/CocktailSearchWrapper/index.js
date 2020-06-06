import React from 'react';
// import { Link } from 'react-router-dom';
import Cocktail from '../../components/Cocktail';

function CocktailSearchWrapper(props) {
  return (

    <div className="cocktails-wrapper">

      <div className="cocktail-list-grid">

        {props.list.map((cocktail) => (
          <Cocktail
            key={cocktail._id}
            cocktailName={cocktail.cocktailName}
            creatorName={cocktail.creatorName}
            _id={cocktail._id}

            cocktailImage={cocktail.cocktailImage}
            isShaken={cocktail.isShaken}
            garnish={cocktail.garnish}
            ingredients={cocktail.ingredients}
            details={cocktail.details}
            method={cocktail.method}
            glass={cocktail.glass}
          />
        ))}
      </div>
    </div>
  )
}

export default CocktailSearchWrapper;