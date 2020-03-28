import React from 'react';
import Search from '../components/Search';
import ClassicCocktail from '../containers/ClassicCocktail';
import NonClassicCocktail from '../containers/NonClassicCocktail';
import RecipeForm from '../components/RecipeForm';
import axios from 'axios';



class CocktailPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktails: [],
    }
  }

  componentDidMount() {
    console.log('--cmpntDidMount Cocktails page');
    this.getCocktails();
  }

  getCocktails() {
    axios.get('http://localhost:4000/cocktails/').then(res => {
      const cocktails = res.data;
      console.log('cocktails: ', res.data)
      this.setState({ cocktails });

    }).catch(function (error) {
      console.log(error);
    })
  }

  render() {
    console.log('--rendering Cocktails page');


    return (
      <div className="cocktail-page-main">
        <h1>Cocktail Page</h1>
        <Search />

        <ClassicCocktail
          key={this.state.cocktails.cocktailsId}
          list={this.state.cocktails.filter(cocktail => cocktail.isClassic === true)}
        />
        <NonClassicCocktail
          key={this.state.cocktails.cocktailId}
          list={this.state.cocktails.filter(cocktail => cocktail.cocktail.isClassic !== true)}
        />

      </div>
    )
  }
}
export default CocktailPage;