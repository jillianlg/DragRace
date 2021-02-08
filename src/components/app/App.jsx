import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllQueens from '../../containers/AllQueens';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={AllQueens} />
        </Switch>
      </Router>
    </>
  );
}
