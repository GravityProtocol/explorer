import React, { PureComponent } from 'react';
import AccountDetails from '../../account-details';
import AccountHeader from '../../account-header';

class AccountDetailsPage extends PureComponent {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <AccountHeader />
        <AccountDetails />
      </div>
    );
  }
}

export default AccountDetailsPage;
