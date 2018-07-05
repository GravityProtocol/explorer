import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { PureComponent, Fragment } from 'react';
import BlockHeader from 'components/block-header';
import TransactionBadge from 'components/transaction-badge';
import { formatDate, formatAmount } from 'utils/format';
import { getTransactionDataById } from 'utils/api';
import Blank from 'components/blank';
import { TRX_TRANSFER_ID, TRX_ACCOUNT_CREATE_ID, TRX_BALANCE_CLAIM_ID } from 'utils/transaction';

class TransactionPage extends PureComponent {
  constructor() {
    super();

    this.state = {
      loaded: false,
      operation: null,
      transaction: null,
    };
  }

  componentDidMount() {
    this.getData(this.props.match.params.id);
  }

  getData(id) {
    this.setState({
      loaded: false,
    });

    getTransactionDataById(id)
      .then(({ operation, transaction }) => {
        this.setState({
          operation,
          transaction,
          loaded: true,
        });
      });
  }

  render() {
    return (
      <Fragment>
        <div className="toolbar">
          <div className="container">
            <div className="toolbar__inner">
              {this.state.loaded ? (
                <BlockHeader
                  title="Transaction ID"
                  value={this.props.match.params.id}
                />
              ) : (
                <Blank type="header" />
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="panel panel_hidden">
              {this.state.loaded ? (
                <Fragment>
                  <h2>Transaction</h2>
                  <div className="table-wrapper">
                    <table className="table table_key-val table_rounted-bottom-corners">
                      <tbody className="table__body">
                        <tr className="table__row">
                          <td className="table__cell table__cell_key">Type</td>
                          <td className="table__cell table__cell_value">
                            <TransactionBadge op={this.state.operation.op[0]} />
                          </td>
                        </tr>
                        <tr className="table__row">
                          <td className="table__cell table__cell_key">Timestamp</td>
                          <td className="table__cell table__cell_value">{formatDate(this.state.transaction.expiration)}</td>
                        </tr>
                        <tr className="table__row">
                          <td className="table__cell table__cell_key">Fee</td>
                          <td className="table__cell table__cell_value">
                            {formatAmount(this.state.operation.op[1].fee.amount)}&nbsp;<i>ZVG</i>
                          </td>
                        </tr>

                        {this.state.operation.op[0] === TRX_TRANSFER_ID && (
                          <Fragment>
                            <tr className="table__row">
                              <td className="table__cell table__cell_key">Sender</td>
                              <td className="table__cell table__cell_value">
                                <Link to={`/accounts/${this.state.operation.op[1].from.account.name}`}>
                                  {this.state.operation.op[1].from.account.name}
                                </Link>
                              </td>
                            </tr>
                            <tr className="table__row">
                              <td className="table__cell table__cell_key">Recipient</td>
                              <td className="table__cell table__cell_value">
                                <Link to={`/accounts/${this.state.operation.op[1].to.account.name}`}>
                                  {this.state.operation.op[1].to.account.name}
                                </Link>
                              </td>
                            </tr>
                            <tr className="table__row">
                              <td className="table__cell table__cell_key">Amount</td>
                              <td className="table__cell table__cell_value">
                                {formatAmount(this.state.operation.op[1].amount.amount)}&nbsp;
                                <i>ZVG</i>
                              </td>
                            </tr>
                          </Fragment>
                        )}

                        {this.state.operation.op[0] === TRX_ACCOUNT_CREATE_ID && (
                          <Fragment>
                            <tr className="table__row">
                              <td className="table__cell table__cell_key">Name</td>
                              <td className="table__cell table__cell_value">
                                <Link to={`/accounts/${this.state.operation.op[1].name}`}>
                                  {this.state.operation.op[1].name}
                                </Link>
                              </td>
                            </tr>
                            <tr className="table__row">
                              <td className="table__cell table__cell_key">Referrer</td>
                              <td className="table__cell table__cell_value">
                                <Link to={`/accounts/${this.state.operation.op[1].referrer.account.name}`}>
                                  {this.state.operation.op[1].referrer.account.name}
                                </Link>
                              </td>
                            </tr>
                            <tr className="table__row">
                              <td className="table__cell table__cell_key">Registrar</td>
                              <td className="table__cell table__cell_value">
                                <Link to={`/accounts/${this.state.operation.op[1].registrar.account.name}`}>
                                  {this.state.operation.op[1].registrar.account.name}
                                </Link>
                              </td>
                            </tr>
                            <tr className="table__row">
                              <td className="table__cell table__cell_key">Referrer percent</td>
                              <td className="table__cell table__cell_value">
                                {this.state.operation.op[1].referrer_percent / 100}%
                              </td>
                            </tr>
                          </Fragment>
                        )}

                        {this.state.operation.op[0] === TRX_BALANCE_CLAIM_ID && (
                          <Fragment>
                            <tr className="table__row">
                              <td className="table__cell table__cell_key">Deposit to account</td>
                              <td className="table__cell table__cell_value">
                                <Link to={`/accounts/${this.state.operation.op[1].deposit_to_account.account.name}`}>
                                  {this.state.operation.op[1].deposit_to_account.account.name}
                                </Link>
                              </td>
                            </tr>
                            <tr className="table__row">
                              <td className="table__cell table__cell_key">Total claimed</td>
                              <td className="table__cell table__cell_value">
                                {formatAmount(this.state.operation.op[1].total_claimed.amount)}
                                &nbsp;<i>ZVG</i>
                              </td>
                            </tr>
                          </Fragment>
                        )}

                        <tr className="table__row">
                          <td className="table__cell table__cell_key">Ref Block</td>
                          <td className="table__cell table__cell_value">
                            <Link to={`/block/${this.state.transaction.ref_block_num}`}>{this.state.transaction.ref_block_num}</Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Fragment>
              ) : (
                <Blank type="article" />
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

TransactionPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default TransactionPage;
