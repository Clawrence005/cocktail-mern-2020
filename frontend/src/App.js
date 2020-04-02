import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';

import HomePage from './pages/HomePage';
import CocktailPage from './pages/CocktailPage';
import UsersPage from './pages/UsersPage';
import ClassicsPage from './pages/ClassicsPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main-wrapper">
          {/* <div className="nav">
            <h1>Main nav</h1>
            <ul>
              <div className="nav-link-wrapper">
                <Link to={'/'} className="nav-link">Home Page</Link>
              </div>
              <div className="nav-link-wrapper">
                <Link to={'/users'}>Users Page</Link >
              </div>
              <div className="nav-link-wrapper">
                <Link to={'/cocktails'}>Cocktail Page</Link>
              </div>

            </ul>
          </div> */}
          <Navigation />
          <div className="page-content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              {/* <Route exact path="/signin" component={SigninPage} /> */}
              <Route exact path="/users" component={UsersPage} />
              <Route exact path="/cocktails" component={CocktailPage} />


            </Switch>
          </div>
        </div>
      </Router >
    )
  }
}



export default App;
