import React from 'react';

import Search from '../components/Search';
import UserContainer from '../containers/UserContainer';
import UserForm from '../components/UserForm';
import axios from 'axios';


class UsersPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }

  getUsers() {
    axios.get('http://localhost:4000/users/').then(res => {
      const users = res.data;
      console.log('users: ', res.data)
      this.setState({ users });
    }).catch(function (error) {
      console.log(error);
    })
  }

  componentDidMount() {
    console.log('--cmpntDidMount Users page');
    this.getUsers();
  }

  render() {
    console.log('--rendering Users page');


    return (
      <div className="users-page-main" >
        <h1>UsersPage</h1>
        <Search />
        <UserContainer
          key={this.state.users._id}
          list={this.state.users} />
        <UserForm />

      </div>
    )
  }
}
export default UsersPage;