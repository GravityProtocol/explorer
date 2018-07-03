import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { formatAmount } from 'utils/format';

function Balances(props) {
  return (
    <Fragment>
      {props.balances.length > 0 ? (
        <div className="table-wrapper">
          <table className="table table_key-val">
            <tbody className="table__body">
              {props.balances.map(balance => (
                <tr className="table__row" key={balance.id}>
                  <td className="table__cell table__cell_key">{balance.id}</td>
                  <td className="table__cell table__cell_value">{formatAmount(balance.balance)}&nbsp;<i>ZGV</i></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p><i>Empty</i></p>
      )}
    </Fragment>
  );
}

Balances.propTypes = {
  balances: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    balance: PropTypes.number,
  })).isRequired,
};

export default Balances;
