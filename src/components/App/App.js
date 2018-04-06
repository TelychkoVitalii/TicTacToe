import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Settings from '../Settings/index';
import Help from '../Help/Help';
import GameLayout from '../Game/index';
import '../../styles/App.css';

class App extends Component {

  render() {
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
