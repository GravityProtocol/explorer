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
        console.log(operation, transaction);

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
                        {this.state.operation.op[0] === TRX_TRANSFER_ID && (
                          <Fragment>
                            <tr className="table__row">
                              <td className="table__cell table__cell_key">Sender</td>
                              <td className="table__cell table__cell_value">
                                <Link to={`/accounts/${this.state.operation.op[1].from.account.id}`}>
                                  {this.state.operation.op[1].from.account.name}
                                </Link>
                              </td>
                            </tr>
                            <tr className="table__row">
                              <td className="table__cell table__cell_key">Recipient</td>
                              <td className="table__cell table__cell_value">
                                <Link to={`/accounts/${this.state.operation.op[1].to.account.id}`}>
                                  {this.state.operation.op[1].to.account.name}
                                </Link>
                              </td>
                            </tr>
                            <tr className="table__row">
                              <td className="table__cell table__cell_key">Amount</td>
                              <td className="table__cell table__cell_value">
                                {formatAmount(this.state.operation.op[1].amount.amount)}
                                &nbsp;<i>ZVG</i>
                              </td>
                            </tr>
                          </Fragment>
                        )}
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
