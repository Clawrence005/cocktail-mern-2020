import React from 'react';
import './App.css';
import ClassicCocktail from './components/ClassicCocktail';
import NonClassicCocktail from './components/NonClassicCocktail';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      apiCocktails: [],
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

  // componentDidMount() {
  //   console.log('--component did mount');
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });


  //   axios
  //     .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // };




  // componentDidMount() {
  //   console.log('--component did mount');
  //   axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
  //     const newContacts = response.data.map(c => {
  //       return {
  //         id: c.id,
  //         name: c.name,
  //         username: c.username,
  //         email: c.email,

  //       };
  //     });
  //     const newState = Object.assign({}, this.state, {
  //       contacts: newContacts
  //     });
  //     console.log('newState', newState);
  //     this.setState(newState);
  //   }).catch(error => console.log(error))
  // }


  componentDidMount() {
    console.log('--component did mount');
    let one = "https://jsonplaceholder.typicode.com/users"
    let two = "http://dummy.restapiexample.com/api/v1/employees"

    const requestOne = axios.get(one)
    const requestTwo = axios.get(two)

    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
      const responseOne = responses[0].data.map(c => {
        return {
          id: c.id,
          name: c.name,
        }
      })
      const responseTwo = responses[1].data.data.map(c => {
        return {
          id: parseInt(c.id) + (10),
          name: c.employee_name
        }
      })
      console.log(responseOne, "responseOne");
      console.log(responseTwo, "responseTwo");

      this.setState((state) => ({ contacts: state.contacts.concat(responseOne) }))
      this.setState((state) => ({ contacts: state.contacts.concat(responseTwo) }))

      console.log(this.state)
    })).catch(error => {
      console.log(error)
    })


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

        {this.state.contacts.map((contact, id) => (
          <p key={contact.id}>Hello, {contact.name} id# {contact.id}!</p>
        ))}

      </div>

    )
  }

}


export default App;
