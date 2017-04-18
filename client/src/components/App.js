import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Chat from './Chat';
import Home from './Home';
import NotFound from './NotFound';

class App extends Component {
  getChildContext() {
    return { socketWrapper: this.props.socketWrapper };
  }

  render() {  
    return (
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/chat" component={Chat}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

App.childContextTypes = {
  socketWrapper: PropTypes.object
};

export default App;
