import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Settings from './Settings/Settings';
import Help from './Help';
import GameLayout from './GameLayout';
import '../styles/App.css';
// import api from '../services/api';

class App extends Component {
  render() {
      // console.log(api.fetchUsers());
    return (
        <Router>
            <div>
                <Header/>
                  <div className="app">

                      <Switch>
                          <Route exact path="/" component={GameLayout}/>
                          <Route path="/settings" component={Settings}/>
                          <Route path="/help" component={Help}/>
                          <Route render={() => <h1 className="errorMsg">404: Page cannot be found</h1>}/>
                      </Switch>

                  </div>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
