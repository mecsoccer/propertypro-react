import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import IndexPage from './IndexPage';
import Signin from './Signin';
import Signup from './Signup';
import Properties from './property/Properties';
import PropertyDetail from './property/PropertyDetail';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route path="/" exact component={IndexPage} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/properties" exact component={Properties} />
            <Route path="/properties/:id" exact component={PropertyDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
