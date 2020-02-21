import React from 'react';
import './App.css';
import ClassicCocktail from './components/ClassicCocktail';
import NonClassicCocktail from './components/NonClassicCocktail';
import axios from 'axios';
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
          image: './assets/img/cocktail1.jpeg',

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
          image: './assets/img/cocktail1.jpeg',
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
          image: "https://images.pexels.com/photos/1224158/pexels-photo-1224158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          cocktailName: 'daiquiri',
          cocktailId: 4,
          isClassic: true,
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
          image: './assets/img/cocktail1.jpeg',

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
          image: './assets/img/cocktail1.jpeg',
        },

      ]
    }
  }

  componentDidMount() {
    console.log('--component did mount');
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log('--rendering ')
    return (
      <div>

        <ClassicCocktail
          key={this.state.cocktails.cocktailId}
          list={this.state.cocktails.filter(cocktail => cocktail.isClassic)
          }
        />
        <NonClassicCocktail
          key={this.state.cocktails.cocktailId}
          list={this.state.cocktails.filter(cocktail => cocktail.isClassic !== true)}
        />

      </div>

    )
  }

}


export default App;
