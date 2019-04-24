import React, { Component } from 'react';
import {Route , BrowserRouter, Switch} from 'react-router-dom';

import Popular from './components/Popular';
import Nav from './components/Nav';
import Home from './components/Home';
import Battle from './components/Battle';
import Results from './components/Results';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className='container'>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/battle' component={Battle} />
              <Route path='/battle/results' component={Results} />
              <Route path='/popular' component={Popular} />
              <Route component={() => <p>Not Found</p>} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
