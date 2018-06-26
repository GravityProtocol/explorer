import React from 'react';
import Keys from './keys';
import AccountInformation from './account-information';
import Balances from './balances';
import VestingBalances from './vesting-balances';
import RecentActivity from './recent-activity';

function AccountDetails() {
  return (
    <div className="container">
      <div className="section">
        <div className="grid">
          <div className="grid__item">
            <div className="panel">
              <Keys />
            </div>
          </div>

          <div className="grid__item">
            <div className="panel">
              <AccountInformation />
            </div>
          </div>

          <div className="grid__item">
            <div className="panel">
              <Balances />
            </div>
          </div>

          <div className="grid__item">
            <div className="panel">
              <VestingBalances />
            </div>
          </div>

          <div className="grid__item">
            <div className="panel">
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
