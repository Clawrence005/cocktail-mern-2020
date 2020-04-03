import React from 'react';
import Search from '../components/Search';
import CocktailSearchWrapper from '../containers/CocktailSearchWrapper';
import RecipeForm from '../components/RecipeForm';
import axios from 'axios';



class CocktailPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktails: [],
      titleClassic: 'Classic Cocktails',
      titleNonClassic: 'NonClassicCocktail',
    }
  }

  componentDidMount() {
    console.log('--cmpntDidMount Cocktails page');
    this.getCocktails();
  }

  getCocktails() {
    axios.get('/cocktails/').then(res => {
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
        <h2 className="section-title" >Classic Cocktails</h2>
        <CocktailSearchWrapper
          key={this.state.cocktails.cocktailsId}
          title={this.state.title === 'ClassicCocktail'}
          list={this.state.cocktails.filter(cocktail => cocktail.isClassic === true)}
        />
        <h2 className="section-title" >NonClassic Cocktails</h2>
        <CocktailSearchWrapper
          key={this.state.cocktails.cocktailId}
          list={this.state.cocktails.filter(cocktail => cocktail.isClassic !== true)}
        />
        <RecipeForm />

      </div>
    )
  }
}
export default CocktailPage;