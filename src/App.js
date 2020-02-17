import React from 'react';
import './App.css';
import ClassicCocktail from './components/ClassicCocktail';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktails: [
        {
          cocktailName: 'martini',
          cocktailId: 1,
          isClassic: true,
          creatorName: 'unknown',
          isShaken: false,
          isDoubleStrain: true,

          recipe: {
            ingredients: [
              { ing: '2 oz london dry gin' },
              { ing: '1 oz dry vermouth' },
              { ing: '1 dash orange bitters' },
            ],
            garnish: 'lemon peel',
            method: "stir the ingredients",
            glass: "martini",
          }
        },
        {
          cocktailName: 'old fashioned',
          cocktailId: 2,
          isClassic: true,
          creatorName: 'unknown',
          isShaken: false,
          isDoubleStrain: false,

          recipe: {
            ingredients: [
              { ing: '2 oz rye whiskey' },
              { ing: '.5 oz demerara syrup' },
              { ing: '3 dash Angostura bitters' },
            ],
            garnish: 'lemon peel',
            method: "stir the ingredients",
            glass: "old fashioned glass",
          }
        },
        {
          cocktailName: 'mojito',
          cocktailId: 3,
          isClassic: true,
          creatorName: 'unknown',
          isShaken: false,
          isDoubleStrain: false,

          recipe: {
            ingredients: [
              { ing: '1.5 oz light cuban style rum' },
              { ing: '.75 oz simple syrup' },
              { ing: '.75 oz lime juice' },
              { ing: '1 oz sparkling water' }
            ],
            garnish: 'muddle mint, add rest of ingredients, and top with sparkling water then ice',
            method: "muddle in glass",
            glass: "collins glass",
          }
        },
        {
          cocktailName: 'daiquiri',
          cocktailId: 4,
          isClassic: true,
          creatorName: 'unknown',
          isShaken: true,
          isDoubleStrain: true,

          recipe: {
            ingredients: [
              { ing: '2 oz light rum' },
              { ing: '.75 oz simple syrup' },
              { ing: '.75 oz lime juice' },
              { ing: '1 oz sparkling water' }
            ],
            garnish: 'lime wheel',
            method: "shake with ice and double strain",
            glass: "coupe",
          }
        },
        {
          cocktailName: 'new fashioned',
          cocktailId: 5,
          isClassic: false,
          creatorName: 'unknown',
          isShaken: true,
          isDoubleStrain: true,

          recipe: {
            ingredients: [
              { ing: '2 oz artisan gasoline' },
              { ing: '.75 oz simple syrup' },
              { ing: '.75 oz pop rocks' },
              { ing: '1 oz sparkling water' }
            ],
            garnish: 'lime wheel',
            method: "shake with ice and double strain",
            glass: "coupe",
          }
        },

      ]
    }
  }

  render() {
    return (
      <div>
        <ClassicCocktail
          id={this.state.cocktails.cocktailId}
          list={this.state.cocktails.filter(cocktail => cocktail.isClassic === true)}
        />
      </div>
    )
  }
}

export default App;
