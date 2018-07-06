import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getLastTransactions } from 'utils/api';
import Blank from 'components/blank';
import TransactionBadge from 'components/transaction-badge';
import { formatDate } from 'utils/format';

class LastTransactions extends PureComponent {
  constructor() {
    super();

    this.state = {
      loaded: false,
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getLastTransactions()
      .then((data) => {
        this.setState({
          data,
          loaded: true,
        });
      })
      .catch(() => {
        this.setState({
          loaded: true,
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      return <Blank type="article" />;
    }

    return (
      <Fragment>
        <h2>Recent Activity</h2>

        <div className="table-wrapper">
          <table className="table table_responsive table_last-transactions table_rounted-bottom-corners">
            <thead className="table__head">
              <tr className="table__row">
                <th className="table__cell table__cell_operation">Operation</th>
                <th className="table__cell table__cell_timestamp">Timestamp</th>
                <th className="table__cell table__cell_block">Block</th>
                <th className="table__cell table__cell_type">Type</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {this.state.data.map(item => (
                <tr className="table__row" key={item.id}>
                  <td className="table__cell table__cell_operation" data-title="Operation">
                    <Link to={`/block/${item.block}/${item.id}`}>{item.id}</Link>
                  </td>
                  <td className="table__cell table__cell_timestamp" data-title="Timestamp">{formatDate(item.timestamp)}</td>
                  <td className="table__cell table__cell_block" data-title="Block">
                    <Link to={`/block/${item.block}`}>{item.block}</Link>
                  </td>
                  <td className="table__cell table__cell_type" data-title="Type">
                    <TransactionBadge op={item.type} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {this.state.loaded && this.state.data.length === 0 && (
            <div className="table-wrapper__empty-message">No recent activity</div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default LastTransactions;
