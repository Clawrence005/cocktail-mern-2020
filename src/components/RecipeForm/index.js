import React from 'react'

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      drink: '' ,
      spirit: '',
      instructions: '',
      garnish: '',
       }; 
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`
You are submitting  
drink:        ${this.state.drink} 
spirit:       ${this.state.spirit }
instructions: ${this.state.instructions}
garnish:      ${this.state.garnish}
    `);
  }
  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
<form 
onSubmit={this.handleFormSubmit}
className="recipe-form neumorphism-positive-template">
<h1>Save Your Recipe </h1>
<h4>drink: {this.state.drink}</h4>
<h4>spirit: {this.state.spirit}</h4>
<h4>instructions: {this.state.instructions}</h4>
<h4>garnish: {this.state.garnish}</h4>
<br/>
<h4>drink</h4>

<input
className="neumorphism-negative-template"
type='text'
name="drink"
placeholder="drink"
value={this.state.drink}
onChange={this.handleFormChange}
/>

<br/>
<h4>spirit</h4>
<input
className="neumorphism-negative-template"
type='text'
name="spirit"
placeholder="spirit"
value={this.state.spirit}
onChange={this.handleFormChange}
/>
<br/>
<h4>instructions</h4>
<textarea
className="neumorphism-negative-template"
type="text"
name="instructions"
placeholder="instructions"
value={this.state.instructions}
onChange={this.handleFormChange}
/>
<br/>
<h4>garnish</h4>
<input
className="neumorphism-negative-template"
type='text'
name="garnish"
placeholder="garnish"
value={this.state.garnish}
onChange={this.handleFormChange}
/>

      <button className="neumorphism-positive-template" type="submit">
      Save
    </button>
      </form>
    );
  }
}
export default RecipeForm;
