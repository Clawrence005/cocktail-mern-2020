import React from 'react';

function ClassicCocktail(props) {
  return (
    <div>

      <h4>Classic Cocktail</h4>
      {props.list.map((cocktail) => (
        <li key={cocktail.cocktailName}>
          <span>{cocktail.cocktailName}</span>
        </li>
      ))}

      {/* {items.map((item, index) => {
   return <div key={index}>
{item.name}</div>; */}

    </div>
  )
}

export default ClassicCocktail;