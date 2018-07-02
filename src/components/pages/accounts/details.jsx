import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { getAccount } from '../../../utils/api';
import AccountHeader from '../../account-header';
import Keys from '../../keys';
import AccountInformation from '../../account-information';
import Balances from '../../balances';
import RecentActivity from '../../recent-activity/index';

class AccountDetailsPage extends PureComponent {
  constructor() {
    super();

    this.state = {
      account: null,
    };
  }

  componentDidMount() {
    getAccount(this.props.match.params.id)
      .then((account) => {
        this.setState({
          account,
        });
      });
  }

  render() {
    if (!this.state.account) {
      return null;
    }

    const { witness, account, statistics } = this.state.account;
    const { owner, active } = account;

    return (
      <div>
        <AccountHeader
          id={this.state.account.account.id}
          name={this.state.account.account.name}
          lifetimeReferrer={this.state.account.account.lifetime_referrer}
        />

        <div className="container">
          <div className="section">
            <div className="grid">
              <div className="grid__item">
                <div className="panel panel_hidden">
                  <Keys
                    signingKey={witness && witness.signing_key}
                    ownerKeys={owner && owner.key_auths && owner.key_auths.map(i => i[0])}
                    activeKeys={active && active.key_auths && active.key_auths.map(i => i[0])}
                  />
                </div>
              </div>

              <div className="grid__item">
                <div className="panel panel_hidden">
                  <AccountInformation
                    lifetimeFeesPaid={statistics.lifetime_fees_paid}
                    mostRecentOp={statistics.most_recent_op}
                    referrerName={this.state.account.referrer_name}
                    referrerId={account.referrer}
                    registrarName={this.state.account.registrar_name}
                    registrarId={account.registrar}
                    totalCoreInOrders={statistics.total_core_in_orders}
                    totalOps={statistics.total_ops}
                    activityIndex={account.activity_index}
                  />
                </div>
              </div>

              <div className="grid__item">
                <div className="panel panel_hidden">
                  <h2>Balances</h2>
                  <Balances
                    balances={this.state.account.balances.map(i => ({
                      id: i.asset_type,
                      balance: +i.balance,
                    }))}
                  />
                </div>
              </div>

              <div className="grid__item">
                <div className="panel panel_hidden">
                  <h2>Vesting Balances</h2>
                  <Balances
                    balances={this.state.account.vesting_balances.map(i => ({
                      id: i.id,
                      balance: +i.balance.amount,
                    }))}
                  />
                </div>
              </div>

              <div className="grid__item">
                <div className="panel">
                  <RecentActivity
                    id={this.props.match.params.id}
                    totalOps={statistics.total_ops}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AccountDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default AccountDetailsPage;
