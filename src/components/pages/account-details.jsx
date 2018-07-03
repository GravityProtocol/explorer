import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';
import { getAccountWithWitness } from 'utils/api';
import AccountHeader from 'components/account-header';
import Keys from 'components/keys';
import AccountInformation from 'components/account-information';
import Balances from 'components/balances';
import RecentActivity from 'components/recent-activity/index';
import Blank from 'components/blank';

class AccountDetailsPage extends PureComponent {
  constructor() {
    super();

    this.state = {
      account: {},
      loaded: false,
    };
  }

  componentDidMount() {
    getAccountWithWitness(this.props.match.params.id)
      .then((account) => {
        this.setState({
          account,
          loaded: true,
        });
      });
  }

  render() {
    const { witness, account, statistics } = this.state.account;

    return (
      <div>
        <div className="toolbar">
          <div className="container">
            <div className="toolbar__inner">
              {this.state.loaded ? (
                <AccountHeader
                  id={this.state.account.account.id}
                  name={this.state.account.account.name}
                  lifetimeReferrer={this.state.account.account.lifetime_referrer}
                />
              ) : (
                <Blank type="header" />
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="grid">
              <div className="grid__item">
                <div className="panel panel_hidden">
                  {this.state.loaded ? (
                    <Keys
                      signingKey={witness && witness.signing_key}
                      ownerKeys={
                        account.owner &&
                        account.owner.key_auths &&
                        account.owner.key_auths.map(i => i[0])
                      }
                      activeKeys={
                        account.active &&
                        account.active.key_auths &&
                        account.active.key_auths.map(i => i[0])
                      }
                    />
                  ) : (
                    <Blank type="article" />
                  )}
                </div>
              </div>

              <div className="grid__item">
                <div className="panel panel_hidden">
                  {this.state.loaded ? (
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
                  ) : (
                    <Blank type="article" />
                  )}
                </div>
              </div>

              <div className="grid__item">
                <div className="panel panel_hidden">
                  {this.state.loaded ? (
                    <Fragment>
                      <h2>Balances</h2>
                      <Balances
                        balances={this.state.account.balances.map(i => ({
                          id: i.asset_type,
                          balance: +i.balance,
                        }))}
                      />
                    </Fragment>
                  ) : (
                    <Blank />
                  )}
                </div>
              </div>

              <div className="grid__item">
                <div className="panel panel_hidden">
                  {this.state.loaded ? (
                    <Fragment>
                      <h2>Vesting Balances</h2>
                      <Balances
                        balances={this.state.account.vesting_balances.map(i => ({
                          id: i.id,
                          balance: +i.balance.amount,
                        }))}
                      />
                    </Fragment>
                  ) : (
                    <Blank />
                  )}
                </div>
              </div>

              <div className="grid__item">
                <div className="panel">
                  {this.state.loaded ? (
                    <RecentActivity
                      id={this.props.match.params.id}
                      totalOps={statistics.total_ops}
                    />
                  ) : (
                    <Blank type="article" />
                  )}
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
