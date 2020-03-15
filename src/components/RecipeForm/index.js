import React from 'react';
import axios from 'axios';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktailName: '',

      creatorName: '',
      isClassic: false,
      isShaken: false,
      isDoubleStrain: false,
      details: '',
      ingredients: '',
      garnish: '',
      method: '',
      glass: '',
      chosenColor: 'blue',
    };
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:')
    alert(`

You are submitting: 
cocktailName:   ${this.state.cocktailName} 
isClassic:       ${this.state.isClassic}
creatorName:     ${this.state.creatorName}
isShaken:       ${this.state.isShaken}
isDoubleStrain: ${this.state.isDoubleStrain}
details:        ${this.state.details}
ingredients:     ${this.state.ingredients}
garnish:        ${this.state.garnish}
method:         ${this.state.method}
glass:           ${this.state.glass}
chosen color:    ${this.state.chosenColor}
    `);
    //creat new cocktail object
    const newCocktail = {
      cocktailName: this.state.cocktailName,
      isClassic: this.state.isClassic,
      creatorName: this.state.creatorName,
      isShaken: this.state.isShaken,
      isDoubleStrain: this.state.isDoubleStrain,
      details: this.state.details,
      ingredients: this.state.ingredients,
      garnish: this.state.garnish,
      method: this.state.method,
      glass: this.state.glass,
      chosenColor: this.state.chosenColor,
    }

    //send new object to route to back end
    axios.post('http://localhost:4000/cocktails/create', newCocktail).then(res => console.log(res.data));

    this.setState({
      cocktailName: '',
      creatorName: '',

      isClassic: false,
      isShaken: false,
      isDoubleStrain: false,

      details: '',
      ingredients: '',
      method: '',

      garnish: '',
      glass: '',
      chosenColor: 'blue',
    });
  }

  handleFormChange = (event) => {
    const { name, value, type, checked } = event.target
    // this.setState({ [event.target.name]: event.target.value });
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <form
        onSubmit={this.handleFormSubmit}
        className="recipe-form neumorphism-positive-template">
        <h1>Save Your Recipe </h1>
        <h4>cocktailName: {this.state.cocktailName}</h4>
        <h4>creatorName: {this.state.creatorName}</h4>

        <h4>isClassic: {this.state.isClassic}</h4>
        <h4>isShaken: {this.state.isShaken}</h4>
        <h4>isDoubleStrain: {this.state.isDoubleStrain}</h4>
        <h4>details: {this.state.details}</h4>
        <h4>ingredients: {this.state.ingredients}</h4>
        <h4>method: {this.state.method}</h4>

        <h4>garnish: {this.state.garnish}</h4>
        <h4>glass: {this.state.glass}</h4>
        <h4>chosenColor: {this.state.chosenColor}</h4>
        <br />

        <h4>Cocktail Name</h4>
        <input
          className="neumorphism-negative-template"
          type='text'
          name="cocktailName"
          placeholder="Drink Name"
          value={this.state.cocktailName}
          onChange={this.handleFormChange}
        />
        <br />

        <h4>Creator Name</h4>
        <input
          className="neumorphism-negative-template"
          type='text'
          name="creatorName"
          placeholder="creatorName"
          value={this.state.creatorName}
          onChange={this.handleFormChange}
        />
        <br />

        <label>Is This drink Classic?
        <input
            type="checkbox"
            name="isClassic"
            checked={this.state.isClassic}
            onChange={this.handleFormChange}
          />
        </label>

        <label>Is This drink shaken?
        <input
            type="checkbox"
            name="isShaken"
            checked={this.state.isShaken}
            onChange={this.handleFormChange}
          />
        </label>

        <label>Is This drink double strained?
        <input
            type="checkbox"
            name="isDoubleStrain"
            checked={this.state.isDoubleStrain}
            onChange={this.handleFormChange}
          />
        </label>

        <h4>details</h4>
        <textarea
          className="neumorphism-negative-template"
          type="text"
          name="details"
          placeholder="details"
          value={this.state.details}
          onChange={this.handleFormChange}
        />
        <br />

        <h4>ingredients</h4>
        <textarea
          className="neumorphism-negative-template"
          type="text"
          name="ingredients"
          placeholder="ingredients"
          value={this.state.ingredients}
          onChange={this.handleFormChange}
        />
        <br />

        <h4>method</h4>
        <textarea
          className="neumorphism-negative-template"
          type="text"
          name="method"
          placeholder="method"
          value={this.state.method}
          onChange={this.handleFormChange}
        />
        <br />

        <h4>garnish</h4>
        <input
          className="neumorphism-negative-template"
          type='text'
          name="garnish"
          placeholder="garnish"
          value={this.state.garnish}
          onChange={this.handleFormChange}
        />


        <h4>Glassware</h4>
        <label>coupe
          <input
            type="radio"
            name="glass"
            value="coupe"
            checked={this.state.glass === "coupe"}
            onChange={this.handleFormChange}
          />
        </label>
        <br />

        <label>collins
          <input
            type="radio"
            name="glass"
            value="collins"
            checked={this.state.glass === "collins"}
            onChange={this.handleFormChange}
          />
        </label>
        <br />
        <label>rocks
          <input
            type="radio"
            name="glass"
            value="rocks"
            checked={this.state.glass === "rocks"}
            onChange={this.handleFormChange}
          />
        </label>
        <br />
        <label>tiki
          <input
            type="radio"
            name="glass"
            value="tiki"
            checked={this.state.glass === "tiki"}
            onChange={this.handleFormChange}
          />
        </label>
        <br />

        <label>Color</label>
        <select
          value={this.state.chosenColor}
          onChange={this.handleFormChange}
          name="chosenColor" >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>


        <button className="neumorphism-positive-template" type="submit">
          Submit
    </button>
      </form>
    );
  }
}
export default RecipeForm;

