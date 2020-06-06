import React from 'react';
import axios from 'axios';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktailName: '',
      creatorName: '',
      cocktailImage: './assets/img/cocktail1.jpeg',
      isClassic: false,
      isShaken: false,
      isDoubleStrain: false,
      details: '',
      ingredients: '',
      garnish: '',
      method: '',
      glass: 'coupe',
      chosenColor: 'blue',
      //hard coded
      users: [
        {
          "userImage": "./assets/img/elvis.jpg",
          "_id": "5eae6679ba922ac9dc21b0f9",
          "userName": "Elvis",
          "email": "the_king_01@yahoo.com",
          "bio": "I'm the king...",
          "createdAt": "2020-05-03T06:36:41.739Z",
          "updatedAt": "2020-05-20T01:28:11.980Z",
          "__v": 0
        },
        {
          "userImage": "./assets/img/cavill.jpg",
          "_id": "5eae674fba922ac9dc21b0fa",
          "userName": "Henry Cavill",
          "email": "superman_01@gmail.com",
          "bio": "I'm superman.",
          "createdAt": "2020-05-03T06:40:15.685Z",
          "updatedAt": "2020-05-20T01:37:08.162Z",
          "__v": 0
        },
        {
          "userImage": "./assets/img/bomer.jpg",
          "_id": "5ec456b17e40a85c2c04841e",
          "userName": "Matt Bomer",
          "email": "matthew_bomer@gmail.com",
          "bio": "hi there",
          "createdAt": "2020-05-19T21:59:13.118Z",
          "updatedAt": "2020-05-20T01:30:13.485Z",
          "__v": 0
        },
        {
          "userImage": "./assets/img/elvis.jpg",
          "_id": "5ec45947d33e855c748db375",
          "userName": "Elvis the clone",
          "email": "thecloneking@gmail.com",
          "bio": "I'm a clone of the king of rock and roll.",
          "createdAt": "2020-05-19T22:10:15.660Z",
          "updatedAt": "2020-05-20T01:34:16.752Z",
          "__v": 0
        },
        {
          "userImage": "./assets/img/caan.jpg",
          "_id": "5ec46b5e5fa5135cc1f649bb",
          "userName": "Scott Caan",
          "email": "scott_caan06@gmail.com",
          "bio": "im an actor",
          "createdAt": "2020-05-19T23:27:26.217Z",
          "updatedAt": "2020-05-20T01:31:47.187Z",
          "__v": 0
        },
        {
          "userImage": "./assets/img/defaultAvatar.svg",
          "_id": "5ec4713bc749eb5dbd1f0a06",
          "userName": "sarah",
          "email": "sarah333@hotmail.com",
          "bio": "I'm a user.",
          "createdAt": "2020-05-19T23:52:27.900Z",
          "updatedAt": "2020-05-20T02:03:55.359Z",
          "__v": 0
        },
        {
          "userImage": "./assets/img/defaultAvatar.svg",
          "_id": "5ec471b5aadb185dcf97b1af",
          "userName": "Paul",
          "email": "paul_user@yahoo.com",
          "bio": "im paul",
          "createdAt": "2020-05-19T23:54:29.495Z",
          "updatedAt": "2020-05-19T23:54:29.495Z",
          "__v": 0
        }
      ]
    };
    this.handleCocktailFormChange = this.handleCocktailFormChange.bind(this)
    this.handleCocktailFormSubmit = this.handleCocktailFormSubmit.bind(this)
    this.handleCocktailPopulateUsers = this.handleCocktailPopulateUsers.bind(this)
  }

  handleCocktailFormChange = (event) => {
    const { name, value, type, checked } = event.target
    // this.setState({ [event.target.name]: event.target.value });
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
      [name]: value
    })
  }


  handleCocktailPopulateUsers = (event) => {
    this.setState({ creatorName: event.target.value })
  }

  handleCocktailFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:')
    alert(`
You are submitting: 
cocktailName:   ${this.state.cocktailName} 
isClassic:       ${this.state.isClassic}
creatorName:     ${this.state.creatorName}
image:          ${this.state.cocktailImage}
isShaken:       ${this.state.isShaken}
isDoubleStrain: ${this.state.isDoubleStrain}
details:        ${this.state.details}
ingredients:     ${this.state.ingredients}
garnish:        ${this.state.garnish}
method:         ${this.state.method}
glass:           ${this.state.glass}
chosen color:    ${this.state.chosenColor}
    `);
    //create new cocktail object from state
    const newCocktail = {
      cocktailName: this.state.cocktailName,
      isClassic: this.state.isClassic,
      cocktailImage: './assets/img/cocktail1.jpeg',
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


    let cocktails = { ...this.state.cocktails, newCocktail };
    this.setState({ cocktails });
  }


  render() {
    return (
      <form
        onSubmit={this.handleCocktailFormSubmit}
        className="recipe-form neumorphism-positive-template">
        <h1>Save Your Recipe </h1>
        {/* <h4>cocktailName: {this.state.cocktailName}</h4>
        <h4>creatorName: {this.state.creatorName}</h4>
        <h4>cocktailImage: </h4>{this.state.cocktailImage}
        <h4>isClassic: {this.state.isClassic}</h4>
        <h4>isShaken: {this.state.isShaken}</h4>
        <h4>isDoubleStrain: {this.state.isDoubleStrain}</h4>
        <h4>details: {this.state.details}</h4>
        <h4>ingredients: {this.state.ingredients}</h4>
        <h4>method: {this.state.method}</h4>

        <h4>garnish: {this.state.garnish}</h4>
        <h4>glass: {this.state.glass}</h4>
        <h4>chosenColor: {this.state.chosenColor}</h4>
        <br /> */}

        <label><h4>Cocktail Name</h4></label>
        <input
          className="neumorphism-negative-template"
          type='text'
          name="cocktailName"
          placeholder="Drink Name"
          value={this.state.cocktailName}
          onChange={this.handleCocktailFormChange}
        />
        <br />

        <label><h4>Creator Name</h4></label>
        <select
          // className="neumorphism-negative-template"
          // type='text'
          // name="creatorName"
          // placeholder="creatorName"
          value={this.state.creatorName}
          onChange={this.handleCocktailPopulateUsers}
        >
          {this.state.users.map(user => (
            <option
              key={user._id}

              value={user._id}
            >
              {user.userName}
            </option>
          ))}
        </select>


        <br />
        {/* <h4>Image</h4>
        <input
          className="neumorphism-negative-template"
          type='text'
          name="cocktailImage"
          placeholder="cocktailImage"
          value={this.state.cocktailImage}
          onChange={this.handleFormChange}
        />
        <br /> */}

        <h4>Is This drink: </h4>
        <br />
        <label> a Classic?
        <input
            type="checkbox"
            name="isClassic"
            checked={this.state.isClassic}
            onChange={this.handleCocktailFormChange}
          />
        </label>
        <br />

        <label>  shaken?
        <input
            type="checkbox"
            name="isShaken"
            checked={this.state.isShaken}
            onChange={this.handleCocktailFormChange}
          />
        </label>
        <br />

        <label> double strained?
        <input
            type="checkbox"
            name="isDoubleStrain"
            checked={this.state.isDoubleStrain}
            onChange={this.handleCocktailFormChange}
          />
        </label>
        <br />

        <h4>details</h4>
        <textarea
          className="neumorphism-negative-template"
          type="text"
          name="details"
          placeholder="details"
          value={this.state.details}
          onChange={this.handleCocktailFormChange}
        />
        <br />

        <h4>ingredients</h4>
        <textarea
          className="neumorphism-negative-template"
          type="text"
          name="ingredients"
          placeholder="ingredients"
          value={this.state.ingredients}
          onChange={this.handleCocktailFormChange}
        />
        <br />

        <h4>method</h4>
        <textarea
          className="neumorphism-negative-template"
          type="text"
          name="method"
          placeholder="method"
          value={this.state.method}
          onChange={this.handleCocktailFormChange}
        />
        <br />

        <h4>garnish</h4>
        <input
          className="neumorphism-negative-template"
          type='text'
          name="garnish"
          placeholder="garnish"
          value={this.state.garnish}
          onChange={this.handleCocktailFormChange}
        />
        <br />

        <h4>Glassware</h4>
        <label>coupe
          <input
            type="radio"
            name="glass"
            value="coupe"
            checked={this.state.glass === "coupe"}
            onChange={this.handleCocktailFormChange}
          />
        </label>
        <br />

        <label>collins
          <input
            type="radio"
            name="glass"
            value="collins"
            checked={this.state.glass === "collins"}
            onChange={this.handleCocktailFormChange}
          />
        </label>
        <br />
        <label>rocks
          <input
            type="radio"
            name="glass"
            value="rocks"
            checked={this.state.glass === "rocks"}
            onChange={this.handleCocktailFormChange}
          />
        </label>
        <br />
        <label>tiki
          <input
            type="radio"
            name="glass"
            value="tiki"
            checked={this.state.glass === "tiki"}
            onChange={this.handleCocktailFormChange}
          />
        </label>
        <br />

        <label>Color</label>
        <select
          value={this.state.chosenColor}
          onChange={this.handleCocktailFormChange}
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

