import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllQueens from '../../containers/AllQueens';
import QueenDetails from '../../containers/QueenDetails';
import Header from '../Header/Header';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AllQueens} />
          <Route exact path="/QueenDetails/:id" component={QueenDetails} />
        </Switch>
      </Router>
    </>
  );
}
