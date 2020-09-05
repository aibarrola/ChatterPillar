import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import SignUp from './components/pages/signUp'
import SignIn from './components/pages/signIn'
import HomePage from './components/pages/homePage'
import NotFound from './components/pages/notFound'
import Chat from './components/Chat/Chat';
import Join from './components/Join/join';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/home" component={HomePage} />
          <Route path="/inbox" component={Join} />
          <Route path="/chat" component={Chat} />
           <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
