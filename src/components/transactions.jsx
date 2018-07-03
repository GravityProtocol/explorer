import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import { formatDate } from 'utils/format';
import TransactionBadge from 'components/transaction-badge';

const Transactions = props => (
  <Fragment>
    <h2>Transactions</h2>
    <div className="table-wrapper">
      <table className="table table_transactions table_responsive table_rounted-bottom-corners">
        <thead className="table__head">
          <tr className="table__row">
            <th className="table__cell table__cell_expiration">Expiration</th>
            <th className="table__cell table__cell_ref-block-num">Ref Block Num</th>
            <th className="table__cell table__cell_type">Type</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {props.transactions.map((item, index) => (
            <tr className="table__row" key={index}>
              <td className="table__cell table__cell_expiration" data-title="Expiration">{formatDate(item.expiration)}</td>
              <td className="table__cell table__cell_ref-block-num" data-title="Ref Block Num">
                <Link to={`/block/${item.ref_block_num}`}>{item.ref_block_num}</Link>
              </td>
              <td className="table__cell table__cell_type" data-title="Type">
                <TransactionBadge op={item.operations[0][0]} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {props.transactions.length === 0 && (
        <div className="table-wrapper__empty-message">No transactions</div>
      )}
    </div>
  </Fragment>
);

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    expiration: PropTypes.string,
    ref_block_num: PropTypes.number,
    operations: PropTypes.arrayOf(PropTypes.array),
  })).isRequired,
};

export default Transactions;
