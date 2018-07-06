import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import TransactionBadge from 'components/transaction-badge';
import { formatDate } from 'utils/format';

const LastTransactions = props => (
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
          {props.data.map(item => (
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
      {props.data.length === 0 && (
        <div className="table-wrapper__empty-message">No recent activity</div>
      )}
    </div>
  </Fragment>
);

LastTransactions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    block: PropTypes.number,
    timestamp: PropTypes.string,
    type: PropTypes.number,
  })).isRequired,
};

export default LastTransactions;
