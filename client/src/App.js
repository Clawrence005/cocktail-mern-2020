import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';

import HomePage from './pages/HomePage';
import CocktailPage from './pages/CocktailPage';
import UsersPage from './pages/UsersPage';
import UserDashboard from './pages/UserDashboard';
import ClassicsPage from './pages/ClassicsPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main-wrapper">

          <Navigation />
          <div className="page-content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              {/* <Route exact path="/signin" component={SigninPage} /> */}
              <Route exact path="/users" component={UsersPage} />
              <Route exact path="/cocktails" component={CocktailPage} />
              <Route exact path="/userdashboard" component={UserDashboard} />


            </Switch>
          </div>
        </div>
      </Router >
    )
  }
}



export default App;
