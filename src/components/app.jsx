import React from 'react';
import HeaderContainer from '../containers/header';
import Dashboard from './dashboard';
import RecentActivity from './recent-activity';
import AccountDetails from './account-details';

function App() {
  return (
    <div>
      <HeaderContainer />
      <Dashboard />
      <RecentActivity />
      <AccountDetails />
    </div>
  );
}

export default App;
