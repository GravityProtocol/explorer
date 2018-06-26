import React from 'react';

function AccountInformation() {
  return (
    <div>
      <h2>Account Information</h2>
      <div className="table-wrapper">
        <table>
          <tbody>
            <tr>
              <td><i>Lifetime Fees Paid</i></td>
              <td>4 634 310,89304 <i>ZGV</i></td>
            </tr>
            <tr>
              <td><i>Most Recent Operation</i></td>
              <td>2.9.23374</td>
            </tr>
            <tr>
              <td><i>Referrer</i></td>
              <td><a href="/">karma</a></td>
            </tr>
            <tr>
              <td><i>Registrar</i></td>
              <td><a href="/">karma-faucet</a></td>
            </tr>
            <tr>
              <td><i>Total Core in Orders</i></td>
              <td>0</td>
            </tr>
            <tr>
              <td><i>Total Operations</i></td>
              <td>2750</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountInformation;
