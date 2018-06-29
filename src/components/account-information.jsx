import React from 'react';

function AccountInformation() {
  return (
    <div>
      <h2>Account Information</h2>
      <div className="table-wrapper">
        <table className="table">
          <tbody className="table__body">
            <tr className="table__row">
              <td className="table__cell"><i>Lifetime Fees Paid</i></td>
              <td className="table__cell">4 634 310,89304 <i>ZGV</i></td>
            </tr>
            <tr className="table__row">
              <td className="table__cell"><i>Most Recent Operation</i></td>
              <td className="table__cell">2.9.23374</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell"><i>Referrer</i></td>
              <td className="table__cell"><a href="/">karma</a></td>
            </tr>
            <tr className="table__row">
              <td className="table__cell"><i>Registrar</i></td>
              <td className="table__cell"><a href="/">karma-faucet</a></td>
            </tr>
            <tr className="table__row">
              <td className="table__cell"><i>Total Core in Orders</i></td>
              <td className="table__cell">0</td>
            </tr>
            <tr className="table__row">
              <td className="table__cell"><i>Total Operations</i></td>
              <td className="table__cell">2750</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountInformation;
