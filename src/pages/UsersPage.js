import React from 'react';
import User from '../components/User';
import Search from '../components/Search';
import UserContainer from '../containers/UserContainer';
import UserForm from '../components/UserForm';
// import Users from '../components/User';
import axios from 'axios';


class UsersPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],

      search: "",
    }
    this.handleSearchFilter = this.handleSearchFilter.bind(this);
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

  // filterList = (event) => {
  //   let items = this.state.users;
  //   items = items.filter((item) => {
  //     return item.toLowercase().search(event.target.value.toLowercase()) !== this.state.item.userName;
  //   });
  //   this.setState({ items: items })
  // }

  handleSearchFilter(event) {
    this.setState({ search: event.target.value })
  }

  // componentWillMount = () => {
  //   this.setState({
  //     initialItems: this.props.content,
  //     items: this.props.content
  //   })
  // }

  componentDidMount() {
    console.log('--cmpntDidMount Users page');
    this.getUsers();
  }

  render() {
    console.log('--rendering Users page');
    let filterUsersByName = this.state.users.filter(
      (user) => {
        return user.userName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    let filterUsersByEmail = this.state.users.filter((user) => {
      return user.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })

    return (
      <div className="users-page-main" >

        <label>Search by Name
        <form>
            <input type="text"
              value={this.state.search}
              placeholder="Search"
              onChange={this.handleSearchFilter} />
          </form></label>

        {/* this shows the list */}
        <h2 className="section-title">Filter by name</h2>
        {filterUsersByName.map((user) => {
          return <User
            key={user._id}
            userImage={user.userImage}
            userName={user.userName}
            email={user.email}
            bio={user.bio}
          />
        })}

        <h1>UsersPage</h1>
        {/* <Search /> */}
        <UserContainer
          key={this.state.users._id}
          list={this.state.users} />
        <UserForm />

      </div>
    )
  }
}
export default UsersPage;