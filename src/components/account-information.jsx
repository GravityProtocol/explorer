import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatIndex } from 'utils/format';

function AccountInformation(props) {
  return (
    <div>
      <h2>Account Information</h2>
      <div className="table-wrapper">
        <table className="table table_key-val">
          <tbody className="table__body">
            <tr className="table__row">
              <td className="table__cell table__cell_key">Lifetime Fees Paid</td>
              <td className="table__cell table__cell_value">{props.lifetimeFeesPaid}&nbsp;<i>ZGV</i></td>
            </tr>
            <tr className="table__row">
              <td className="table__cell table__cell_key">Most Recent Operation</td>
              <td className="table__cell table__cell_value">{props.mostRecentOp}</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell table__cell_key">Referrer</td>
              <td className="table__cell table__cell_value"><Link to={`/accounts/${props.referrerId}`}>{props.referrerName}</Link></td>
            </tr>
            <tr className="table__row">
              <td className="table__cell table__cell_key">Registrar</td>
              <td className="table__cell table__cell_value"><Link to={`/accounts/${props.registrarId}`}>{props.registrarName}</Link></td>
            </tr>
            <tr className="table__row">
              <td className="table__cell table__cell_key">Total Core in Orders</td>
              <td className="table__cell table__cell_value">{props.totalCoreInOrders}</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell table__cell_key">Total Operations</td>
              <td className="table__cell table__cell_value">{props.totalOps}</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell table__cell_key">Gravity Index</td>
              <td className="table__cell table__cell_value">{formatIndex(props.activityIndex)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

AccountInformation.propTypes = {
  lifetimeFeesPaid: PropTypes.number.isRequired,
  mostRecentOp: PropTypes.string.isRequired,
  referrerName: PropTypes.string.isRequired,
  referrerId: PropTypes.string.isRequired,
  registrarName: PropTypes.string.isRequired,
  registrarId: PropTypes.string.isRequired,
  totalCoreInOrders: PropTypes.number.isRequired,
  totalOps: PropTypes.number.isRequired,
  activityIndex: PropTypes.string.isRequired,
};

export default AccountInformation;
