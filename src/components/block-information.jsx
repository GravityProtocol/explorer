import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { formatDate } from 'utils/format';

const BlockInformation = props => (
  <Fragment>
    <h2>Summary</h2>
    <div className="table-wrapper">
      <table className="table table_block-information table_key-val">
        <tbody className="table__body">
          <tr className="table__row">
            <td className="table__cell table__cell_key">Previous</td>
            <td className="table__cell table__cell_value">
              <span className="key">{props.previous}</span>
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__cell table__cell_key">Date & Time</td>
            <td className="table__cell table__cell_value">
              {formatDate(props.timestamp)}
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__cell table__cell_key">Markle Root</td>
            <td className="table__cell table__cell_value">
              <span className="key">{props.transactionMerkleRoot}</span>
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__cell table__cell_key">Witness</td>
            <td className="table__cell table__cell_value">{props.witness}</td>
          </tr>
          <tr className="table__row">
            <td className="table__cell table__cell_key">Witness Signature</td>
            <td className="table__cell table__cell_value">
              <span className="key">{props.witnessSignature}</span>
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__cell table__cell_key">Transactions in Block</td>
            <td className="table__cell table__cell_value">{props.transactionsCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Fragment>
);

BlockInformation.propTypes = {
  previous: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  transactionMerkleRoot: PropTypes.string.isRequired,
  witness: PropTypes.string.isRequired,
  witnessSignature: PropTypes.string.isRequired,
  transactionsCount: PropTypes.number.isRequired,
};

export default BlockInformation;
