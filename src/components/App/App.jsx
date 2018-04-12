import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Settings from '../Settings/index.jsx';
import Help from '../Help/Help.jsx';
import GameLayout from '../Game/index.jsx';
import UserPage from '../Game/UserPage.jsx';
import '../../styles/App.css';

const mapStateToProps = (state) => {
    return {
        settings: state.game.settings
    }
};

class App extends Component {

  render() {
        return (
            <Router>
                <div>
                    <Header/>
                      <div className="app">

                          <Switch>
                              <Route exact path={process.env.PUBLIC_URL + '/'} render={() => (
                                  (this.props.settings.figure === '') ? ( <Redirect to="/settings"/> ) : ( <GameLayout /> )
                              )}/>
                              <Route path="/settings" component={Settings}/>
                              <Route path="/help" component={Help}/>
                              <Route path="/user/:id" component={UserPage} />
                              <Route render={() => <h1 className="errorMsg">404: Page cannot be found</h1>}/>
                          </Switch>

                      </div>
                    <Footer/>
                </div>
            </Router>
        );
  }
}

export default connect(
    mapStateToProps,
    null
)(App);
