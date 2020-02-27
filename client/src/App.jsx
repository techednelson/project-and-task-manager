import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/login';
import NewAccount from './components/auth/new-account';
import Projects from './components/projects/projects';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/new-account" component={NewAccount} />
              <Route exact path="/projects" component={Projects} />
          </Switch>
      </Router>
  );
}

export default App;
