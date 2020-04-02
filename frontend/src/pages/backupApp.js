import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
// import User from './components/Users';

import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import CocktailPage from './pages/CocktailPage';

import UserContainer from './containers/UserContainer';
import ClassicCocktail from './containers/ClassicCocktail';
import NonClassicCocktail from './containers/NonClassicCocktail';
import RecipeForm from './components/RecipeForm';
import SvgFormContainer from './components/SvgFormContainer';
import UserForm from './components/UserForm';
import Search from './components/Search';

import Navigation from './components/Navigation';
// import ColorSwatch from './components/ColorSwatch';
//responsible for sending the post to the backend
import axios from 'axios';
// "concurrently \"yarn run start-watch\" \"cd client && yarn start\""

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // search: '',
      // selectedValue: "none yet",
      // selectedOption: "option1",
      // search:'mold fashioned',
      cocktailInput: '',
      contacts: [],
      apiCocktails: [],
      cocktails: [],
      users: [],
      // colors: [],
      // cocktails: [
      //   {
      //     cocktailName: 'martini',
      //     cocktailId: 1,
      //     isClassic: true,
      //     creatorName: 'unknown',
      //     isShaken: false,
      //     isDoubleStrain: true,
      //     details: [
      //       { info: '333' },
      //       { info: '733' },
      //       { info: '533' }
      //     ],

      //     ingredients: [
      //       '2 oz london dry gin',
      //       '1 oz dry vermouth',
      //       '1 dash orange bitters',
      //     ],
      //     garnish: 'lemon peel',
      //     method: "stir the ingredients",
      //     glass: "martini",
      //     image: './assets/img/cocktail1.jpeg',

      //   },
      //   {
      //     cocktailName: 'old fashioned',
      //     cocktailId: 2,
      //     isClassic: true,
      //     creatorName: 'unknown',
      //     isShaken: false,
      //     isDoubleStrain: false,

      //     details: [
      //       { info: '333' },
      //       { info: '733' },
      //       { info: '533' }
      //     ],

      //     ingredients: [
      //       '2 oz rye whiskey',
      //       '.5 oz demerara syrup',
      //       '3 dash Angostura bitters',
      //     ],
      //     garnish: 'lemon peel',
      //     method: "stir the ingredients",
      //     glass: "old fashioned glass",
      //     image: './assets/img/cocktail1.jpeg',
      //   },
      //   {
      //     cocktailName: 'mojito',
      //     cocktailId: 3,
      //     isClassic: true,
      //     creatorName: 'unknown',
      //     isShaken: false,
      //     isDoubleStrain: false,

      //     details: [
      //       { info: '333' },
      //       { info: '733' },
      //       { info: '533' }
      //     ],
      //     ingredients: [
      //       '1.5 oz light cuban style rum',
      //       '.75 oz simple syrup',
      //       '.75 oz lime juice',
      //       '1 oz sparkling water'
      //     ],
      //     garnish: 'muddled mint',
      //     method: 'muddle mint, add rest of ingredients, and top with sparkling water then ice',
      //     glass: "collins glass",
      //     image: "https://images.pexels.com/photos/1224158/pexels-photo-1224158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      //   },
      //   {
      //     cocktailName: 'daiquiri',
      //     cocktailId: 4,
      //     isClassic: true,
      //     creatorName: 'unknown',
      //     isShaken: true,
      //     isDoubleStrain: true,

      //     details: [
      //       { info: '333' },
      //       { info: '733' },
      //       { info: '533' }
      //     ],

      //     ingredients: [
      //       '2 oz light rum',
      //       '.75 oz simple syrup',
      //       '.75 oz lime juice',
      //       '1 oz sparkling water'
      //     ],

      //     garnish: 'lime wheel',
      //     method: "shake with ice and double strain",
      //     glass: "coupe",
      //     image: './assets/img/cocktail1.jpeg',

      //   },
      //   {
      //     cocktailName: 'new fashioned',
      //     cocktailId: 5,
      //     isClassic: false,
      //     creatorName: 'unknown',
      //     isShaken: true,
      //     isDoubleStrain: true,

      //     details: [
      //       { info: '333' },
      //       { info: '733' },
      //       { info: '533' }
      //     ],

      //     ingredients: [
      //       '2 oz light rum',
      //       '.75 oz simple syrup',
      //       '.75 oz lime juice',
      //       '1 oz sparkling water'
      //     ],

      //     garnish: 'lime wheel',
      //     method: "shake with ice and double strain",
      //     glass: "coupe",
      //     image: './assets/img/cocktail1.jpeg',
      //   },

      // ]
    }

  }

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
  getCocktails() {
    axios.get('http://localhost:4000/cocktails/')
      .then(res => {
        const cocktails = res.data;
        this.setState({ cocktails });
        console.log('cocktails :', res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getUsers() {
    axios.get('http://localhost:4000/users/').then(res => {
      const users = res.data;
      this.setState({ users });
      console.log('users :', res.data);
    })
      .catch(function (error) {
        console.log(error);
      })
  }
  componentDidMount() {
    this.getCocktails();
    this.getUsers();
  }

  handleFormDelete = (event) => {

    event.preventDefault();
    axios.delete('http://localhost:4000/cocktails/delete/{this.state._id}')
      .then(res => console.log(res.data));
  }

  // fetchCocktailsDb() {
  //   console.log(`fetched Cocktails:`)
  //   axios.get('http://localhost:4000/cocktails/')
  //     .then(response => {
  //       this.setState({ cocktails: response.data });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }
  // Api call here
  // componentDidMount() {
  //   // axios.get('http://localhost:4000/cocktails/')
  //   //   .then(response => {
  //   //     this.setState({ cocktails: response.data });
  //   //   })
  //   //   .catch(function (error) {
  //   //     console.log(error);
  //   //   })
  //   let drinkParam = 'gimlet'
  //   console.log('--component did mount');
  //   let one = "https://jsonplaceholder.typicode.com/users"
  //   let two = "http://dummy.restapiexample.com/api/v1/employees";
  //   let three = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkParam}`;

  //   const requestOne = axios.get(one)
  //   const requestTwo = axios.get(two)
  //   const requestThree = axios.get(three)
  //   axios.get('http://localhost:4000/cocktails/')
  //     .then(response => {
  //       this.setState({ cocktails: response.data });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //   axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
  //     const responseOne = responses[0].data.map(c => {
  //       return {
  //         id: c.id,
  //         name: c.name,
  //       }
  //     })
  //     const responseTwo = responses[1].data.data.map(c => {
  //       return {
  //         id: parseInt(c.id) + (10),
  //         name: c.employee_name
  //       }
  //     })
  //     // const responseThree = responses[2]
  //     const responseThree = responses[2].data.drinks.map(c => {
  //       return {
  //         drinkName: c.strDrink,
  //         glassware: c.strGlass,
  //         instructions: c.strInstructions,
  //         ingr1: c.strIngredient1,
  //         ingr2: c.strIngredient2,
  //         ingr3: c.strIngredient3,
  //         ingr4: c.strIngredient4,
  //         ingr5: c.strIngredient5,
  //         ingr6: c.strIngredient6,
  //         ingr7: c.strIngredient7,
  //         ingr8: c.strIngredient8,
  //         ingr9: c.strIngredient9,
  //         ingr10: c.strIngredient10,

  //         ingr1Measurement: c.strMeasure1,
  //         ingr2Measurement: c.strMeasure2,
  //         ingr3Measurement: c.strMeasure3,
  //         ingr4Measurement: c.strMeasure4,
  //         ingr5Measurement: c.strMeasure5,
  //         ingr6Measurement: c.strMeasure6,
  //         ingr7Measurement: c.strMeasure7,
  //         ingr8Measurement: c.strMeasure8,
  //         ingr9Measurement: c.strMeasure9,
  //         ingr10Measurement: c.strMeasure10,
  //       }
  //     })

  //     console.log(responseOne, "responseOne");
  //     console.log(responseTwo, "responseTwo");
  //     console.log(responseThree, "responseThree");

  //     this.setState((state) => ({ contacts: state.contacts.concat(responseOne) }))
  //     this.setState((state) => ({ contacts: state.contacts.concat(responseTwo) }))

  //     // Object.assign({}, this.state, { contacts: responseOne + responseTwo });
  //     console.log('State', this.state)
  //   })).catch(error => {
  //     console.log(error)
  //   })
  // }

  // updateSearch = (event)=>{
  //   this.setState({search: event.target.value});
  //   console.log(this.state)
  // }

  // handleOptionChange = changeEvent => {
  //   this.setState({
  //     selectedOption: changeEvent.target.value
  //   });
  // };

  // handleFormSubmit = formSubmitEvent => {
  //   formSubmitEvent.preventDefault();

  //   console.log("You have submitted:", this.state.selectedOption);
  // };

  render() {
    console.log('--rendering ')

    // return (
    {/*     <Router>
        <Link to="/">Home</Link><br/>
        <Link to="/create">create cocktail</Link> <br/>
        <Link to="/classic">classic cocktail</Link><br/>
        <Link to="/nonclassic">nonclassic cocktail</Link><br/>

        <Route path="/" exact component={Search} />
        <Route path="/search" exact component={Search} />
        <Route path="/classic" exact component={ClassicCocktail} />
        <Route path="/nonclassic" exact component={NonClassicCocktail} />

        <Route path="/edit/:id" exact component={EditCocktail} /> */}


    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/cocktails" component={CocktailPage} />
          {/* <Route path="/categories/:id" component={IndividualCategoryPage} /> */}
        </Switch>


        <div className="outer-container">
          <Navigation />
          <div className="main-container">
            <SvgFormContainer />

            {/* <div className="users-wrapper">
          {this.state.users.map((user) => (
            <User
              key={user._id}

              userName={user.userName}
              id={user._id}
              email={user.email}
              bio={user.bio}
              userImage={user.imageName}
            />
          ))
          }
        </div> */}

            <UserContainer
              key={this.state.users._id}
              list={this.state.users}
            // userName={this.state.userName}
            // id={this.state.id}
            // email={this.state.email}
            // bio={this.state.bio} userImage={this.state.userImage}
            />
            <UserForm />

            <RecipeForm />

            <Search />
            <div className="all-cocktail-list-container" >
              <ClassicCocktail
                // name={this.state.cocktails.cocktailName}
                key={this.state.cocktails.cocktailId}
                list={this.state.cocktails.filter(cocktail => cocktail.isClassic)}
              />
              <NonClassicCocktail
                key={this.state.cocktails.cocktailId}
                list={this.state.cocktails.filter(cocktail => cocktail.isClassic !== true)}
              />
            </div>
            {/* {this.state.contacts.map((contact, id) => (
          <p key={contact.id}> {contact.name} id# {contact.id}</p> 
        ))}*/}

          </div>
        </div>
      </>
    );
  }
}


export default App;
