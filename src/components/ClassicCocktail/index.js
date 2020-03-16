import React from 'react';
// import { Link } from 'react-router-dom';

function ClassicCocktail(props) {
  return (

    <div className="cocktail-list-container 
    classic-list 
    neumorphism-positive-template">
      <h2>Classic Cocktails</h2>
      <div className="cocktail-list-grid"> 
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
          <li>id: {cocktail._id}</li>
          <strong>Ingredients</strong>
          {cocktail.ingredients.map((subItem, index) =>

            <li key={index}>{subItem}</li>)}
          <p>garnish: {cocktail.garnish}</p>
          <p>method: {cocktail.method}</p>
          <p>glassware: {cocktail.glass}</p>
          {/* <Link to={"/cocktails/"+cocktail._id}>delete</Link> */}

        </div>
      ))}
    </div>       
     </div>
  )
}

export default ClassicCocktail;