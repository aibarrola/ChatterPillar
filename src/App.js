import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import SignUp from './components/pages/signUp'
import SignIn from './components/pages/signIn'
import HomePage from './components/pages/homePage'
import NotFound from './components/pages/notFound'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/home" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
