import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import HeaderContainer from '../containers/header';
import HomePage from '../pages/index';
import AccountsPage from '../pages/accounts/index';
import AccountDetailsPage from '../pages/accounts/details';
import FeePage from '../pages/fee/index';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={HeaderContainer} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/accounts" component={AccountsPage} />
          <Route exact path="/accounts/:name" component={AccountDetailsPage} />
          <Route exact path="/fee" component={FeePage} />
          <Route component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
