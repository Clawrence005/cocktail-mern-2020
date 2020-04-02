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

      // search: "",
      nameSearch: "",
      emailSearch: "",
    }
    // this.handleSearchFilter = this.handleSearchFilter.bind(this);
    this.handleSearchNames = this.handleSearchNames.bind(this);
    this.handleSearchEmails = this.handleSearchEmails.bind(this);

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

  handleSearchNames(event) {
    // console.log("nameSearch: ", this.state.nameSearch)
    this.setState({ nameSearch: event.target.value })
  }
  handleSearchEmails(event) {
    this.setState({ emailSearch: event.target.value })
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
        return user.userName.toLowerCase().indexOf(this.state.nameSearch.toLowerCase()) !== -1;
      }
    );

    let filterUsersByEmail = this.state.users.filter((user) => {
      return user.email.toLowerCase().indexOf(this.state.emailSearch.toLowerCase()) !== -1;
    })

    return (
      <div className="users-page-main" >

        {/* <Search

          value={this.state.nameSearch}
          onChange={this.handleSearchNames}
        /> */}

        <h2 className="section-title">Filter by name</h2>
        <label>Search by Name
        <form>
            <input type="text"
              value={this.state.nameSearch}
              placeholder="Search Names"
              onChange={this.handleSearchNames} />
          </form></label>

        {filterUsersByName.map((user) => {
          return <User
            key={user._id}
            userImage={user.userImage}
            userName={user.userName}
            email={user.email}
            bio={user.bio}
          />
        })}


        <label>Search by Email
        <form>
            <input type="text"
              value={this.state.emailSearch}
              placeholder="Search Emails"
              onChange={this.handleSearchEmails} />
          </form></label>
        {/* this shows the list */}

        <h2 className="section-title">Filter by email</h2>
        {filterUsersByEmail.map((user) => {
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