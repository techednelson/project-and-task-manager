import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={} />
              <Route exact path="/new-account" component={} />
              <Route exact path="/project" component={} />
          </Switch>
      </Router>
  );
}

export default App;
