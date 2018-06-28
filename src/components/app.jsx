import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import HeaderContainer from './header';
import HomePage from './pages/index';
import AccountsPage from './pages/accounts/index';
import AccountDetailsPage from './pages/accounts/details';
import FeePage from './pages/fee/index';

function App(props) {
  if (!props.apiInitialized) {
    return null;
  }

  return (
    <Router>
      <div className="app">
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

App.propTypes = {
  apiInitialized: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  screenIsBlocked: state.screen.blocked,
  topOffset: state.screen.topOffset,
  apiInitialized: state.api.initialized,
});

export default connect(mapStateToProps)(App);
