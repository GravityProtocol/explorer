import React from 'react';

function Balances() {
  return (
    <div>
      <h2>Balances</h2>
      <div className="table-wrapper">
        <table className="table">
          <tbody className="table__body">
            <tr className="table__row">
              <td className="table__cell" style={{ width: '100%' }}><a href="/">1.13.77</a></td>
              <td className="table__cell">4&nbsp;634&nbsp;310,89304&nbsp;<i>ZGV</i></td>
            </tr>
            <tr className="table__row">
              <td className="table__cell"><a href="/">1.13.78</a></td>
              <td className="table__cell">820,100&nbsp;<i>ZGV</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Balances;
