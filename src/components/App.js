import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import Signin from './Signin';
import Signup from './Signup';
import Properties from './Properties';
import PropertyDetail from './PropertyDetail';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={IndexPage} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/properties" exact component={Properties} />
            <Route path="/properties/:id" exact component={PropertyDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
