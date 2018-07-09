import { ConnectedRouter } from 'connected-react-router';

import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import HeaderContainer from 'components/header';
import HomePage from 'components/pages/index';
import AccountsPage from 'components/pages/accounts';
import AccountDetailsPage from 'components/pages/account-details';
import FeePage from 'components/pages/fee';
import BlockPage from 'components/pages/block';
import TransactionPage from 'components/pages/transaction';
import WitnessesPage from 'components/pages/witnesses';
import CommitteePage from 'components/pages/committee';
import SearchNotFound from 'components/search-not-found';

function App(props) {
  if (!props.apiInitialized) {
    return null;
  }

  return (
    <ConnectedRouter history={props.history}>
      <div className="app">
        <Route path="/" component={HeaderContainer} />

        {props.notFoundMessageVisible ? (
          <SearchNotFound />
        ) : (
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/accounts" component={AccountsPage} />
            <Route exact path="/accounts/:name" component={AccountDetailsPage} />
            <Route exact path="/block/:num" component={BlockPage} />
            <Route exact path="/block/:num/:id" component={TransactionPage} />
            <Route exact path="/witnesses" component={WitnessesPage} />
            <Route exact path="/committee" component={CommitteePage} />
            <Route exact path="/fee" component={FeePage} />
            <Route component={HomePage} />
          </Switch>
        )}
      </div>
    </ConnectedRouter>
  );
}

App.propTypes = {
  apiInitialized: PropTypes.bool.isRequired,
  notFoundMessageVisible: PropTypes.bool.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  screenIsBlocked: state.screen.blocked,
  topOffset: state.screen.topOffset,
  apiInitialized: state.api.initialized,
  notFoundMessageVisible: state.search.notFoundMessageVisible,
  searchRedirectUrl: state.search.redirectUrl,
});

export default connect(mapStateToProps)(App);
