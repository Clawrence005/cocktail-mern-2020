import React from 'react';
import './App.css';
import ClassicCocktail from './components/ClassicCocktail';
import NonClassicCocktail from './components/NonClassicCocktail';

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
          details: [
            { info: '333' },
            { info: '733' },
            { info: '533' }
          ],

          ingredients: [
            '2 oz london dry gin',
            '1 oz dry vermouth',
            '1 dash orange bitters',
          ],
          garnish: 'lemon peel',
          method: "stir the ingredients",
          glass: "martini",

        },
        {
          cocktailName: 'old fashioned',
          cocktailId: 2,
          isClassic: true,
          creatorName: 'unknown',
          isShaken: false,
          isDoubleStrain: false,

          details: [
            { info: '333' },
            { info: '733' },
            { info: '533' }
          ],

          ingredients: [
            '2 oz rye whiskey',
            '.5 oz demerara syrup',
            '3 dash Angostura bitters',
          ],
          garnish: 'lemon peel',
          method: "stir the ingredients",
          glass: "old fashioned glass",
        },
        {
          cocktailName: 'mojito',
          cocktailId: 3,
          isClassic: true,
          creatorName: 'unknown',
          isShaken: false,
          isDoubleStrain: false,

          details: [
            { info: '333' },
            { info: '733' },
            { info: '533' }
          ],
          ingredients: [
            '1.5 oz light cuban style rum',
            '.75 oz simple syrup',
            '.75 oz lime juice',
            '1 oz sparkling water'
          ],
          garnish: 'muddled mint',
          method: 'muddle mint, add rest of ingredients, and top with sparkling water then ice',
          glass: "collins glass",
        },
        {
          cocktailName: 'daiquiri',
          cocktailId: 4,
          isClassic: false,
          creatorName: 'unknown',
          isShaken: true,
          isDoubleStrain: true,

          details: [
            { info: '333' },
            { info: '733' },
            { info: '533' }
          ],

          ingredients: [
            '2 oz light rum',
            '.75 oz simple syrup',
            '.75 oz lime juice',
            '1 oz sparkling water'
          ],

          garnish: 'lime wheel',
          method: "shake with ice and double strain",
          glass: "coupe",

        },
        {
          cocktailName: 'new fashioned',
          cocktailId: 5,
          isClassic: false,
          creatorName: 'unknown',
          isShaken: true,
          isDoubleStrain: true,

          details: [
            { info: '333' },
            { info: '733' },
            { info: '533' }
          ],

          ingredients: [
            '2 oz light rum',
            '.75 oz simple syrup',
            '.75 oz lime juice',
            '1 oz sparkling water'
          ],

          garnish: 'lime wheel',
          method: "shake with ice and double strain",
          glass: "coupe",
        },

      ]
    }
  }
  //     cocktails: [
  //       {
  //         cocktailName: 'martini',
  //         cocktailId: 1,
  //         isClassic: true,
  //         creatorName: 'unknown',
  //         isShaken: false,
  //         isDoubleStrain: true,
  //         details: [
  //           { info: '333' },
  //           { info: '733' },
  //           { info: '533' }
  //         ],

  //         ingredients: [
  //           { ing: '2 oz london dry gin' },
  //           { ing: '1 oz dry vermouth' },
  //           { ing: '1 dash orange bitters' },
  //         ],
  //         garnish: 'lemon peel',
  //         method: "stir the ingredients",
  //         glass: "martini",

  //       },
  //       {
  //         cocktailName: 'old fashioned',
  //         cocktailId: 2,
  //         isClassic: true,
  //         creatorName: 'unknown',
  //         isShaken: false,
  //         isDoubleStrain: false,

  //         details: [
  //           { info: '333' },
  //           { info: '733' },
  //           { info: '533' }
  //         ],

  //         ingredients: [
  //           { ing: '2 oz rye whiskey' },
  //           { ing: '.5 oz demerara syrup' },
  //           { ing: '3 dash Angostura bitters' },
  //         ],
  //         garnish: 'lemon peel',
  //         method: "stir the ingredients",
  //         glass: "old fashioned glass",
  //       },
  //       {
  //         cocktailName: 'mojito',
  //         cocktailId: 3,
  //         isClassic: true,
  //         creatorName: 'unknown',
  //         isShaken: false,
  //         isDoubleStrain: false,

  //         details: [
  //           { info: '333' },
  //           { info: '733' },
  //           { info: '533' }
  //         ],
  //         ingredients: [
  //           { ing: '1.5 oz light cuban style rum' },
  //           { ing: '.75 oz simple syrup' },
  //           { ing: '.75 oz lime juice' },
  //           { ing: '1 oz sparkling water' }
  //         ],
  //         garnish: 'muddle mint, add rest of ingredients, and top with sparkling water then ice',
  //         method: "muddle in glass",
  //         glass: "collins glass",
  //       },
  //       {
  //         cocktailName: 'daiquiri',
  //         cocktailId: 4,
  //         isClassic: false,
  //         creatorName: 'unknown',
  //         isShaken: true,
  //         isDoubleStrain: true,

  //         details: [
  //           { info: '333' },
  //           { info: '733' },
  //           { info: '533' }
  //         ],

  //         ingredients: [
  //           { ing: '2 oz light rum' },
  //           { ing: '.75 oz simple syrup' },
  //           { ing: '.75 oz lime juice' },
  //           { ing: '1 oz sparkling water' }
  //         ],

  //         garnish: 'lime wheel',
  //         method: "shake with ice and double strain",
  //         glass: "coupe",

  //       },
  //       {
  //         cocktailName: 'new fashioned',
  //         cocktailId: 5,
  //         isClassic: false,
  //         creatorName: 'unknown',
  //         isShaken: true,
  //         isDoubleStrain: true,

  //         details: [
  //           { info: '333' },
  //           { info: '733' },
  //           { info: '533' }
  //         ],

  //         ingredients: [
  //           { ing: '2 oz light rum' },
  //           { ing: '.75 oz simple syrup' },
  //           { ing: '.75 oz lime juice' },
  //           { ing: '1 oz sparkling water' }
  //         ],

  //         garnish: 'lime wheel',
  //         method: "shake with ice and double strain",
  //         glass: "coupe",
  //       },

  //     ]
  //   }
  // }

  render() {
    return (
      <div>
        {/* {items.map((item, index) => {
   return <div key={index}>
{item.name}</div>; */}

        <ClassicCocktail
          key={this.state.cocktails.cocktailId}
          list={this.state.cocktails.filter(cocktail => cocktail.isClassic)
          }
        />
        <NonClassicCocktail
          key={this.state.cocktails.cocktailId}
          list={this.state.cocktails.filter(cocktail => cocktail.isClassic !== true)}
        />

        {/* {this.state.cocktails.map((cocktail) =>
          <div>
            <h3>{cocktail.cocktailName}</h3>
            <ul>
              {cocktail.ingredients.map((subItem) =>
                <li>{subItem}</li>
              )}
            </ul>
          </div>
        )} */}

      </div>

    )
  }

}


export default App;
