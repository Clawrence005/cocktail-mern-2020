import React from 'react';
import axios from 'axios';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      bio: '',
      userImage: '',

    };
    this.handleUserFormChange = this.handleUserFormChange.bind(this)
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this)
  }

  handleUserFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleUserFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:')
    alert(`
submitting: 
userName: ${this.state.userName}
email: ${this.state.email}
bio: ${this.state.bio}
userImage: ${this.state.userImage}
`)
    //create new cocktail object from state
    const newUser = {
      userName: this.state.userName,
      email: this.state.email,
      bio: this.state.bio,
      userImage: this.state.userImage,
    }
    axios.post('http://localhost:4000/users/create', newUser).then(res => console.log(res.data));

    let users = { ...this.state.users, newUser };
    this.setState({ users });
  }

  render() {
    return (
      <form
        onSubmit={this.handleUserFormSubmit}
        className="user-form">
        <h1>Add Yourself as a User</h1>
        <label>Choose Your Username
          <input
            className="neumorphism-negative-template"
            type="text"
            name="userName"
            placeholder="User Name"
            value={this.state.userName}
            onChange={this.handleUserFormChange}
          />
        </label>
        <br />
        <label>Email
          <input
            className="neumorphism-negative-template"
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserFormChange}
          />
        </label>
        <br />
        <label>User Bio
          <textarea
            className="neumorphism-negative-template"
            type="text"
            name="bio"
            placeholder="User Bio"
            value={this.state.bio}
            onChange={this.handleUserFormChange}
          />
        </label>
        <br />
        <label>User Image
          <input
            className="neumorphism-negative-template"
            type="text"
            name="userImage"
            placeholder="User Image"
            value={this.state.userImage}
            onChange={this.handleUserFormChange}
          />
        </label>
        <br />
        <button
          // className=""
          type="submit"
        >
          Submit
</button>
      </form>
    )
  }
}

export default UserForm
