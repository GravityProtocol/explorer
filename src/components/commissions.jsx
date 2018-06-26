import React from 'react';

function Commissions() {
  return (
    <div className="container">
      <div className="section">
        <div className="panel">
          <h2>Commissions</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <td>Operation</td>
                  <td>Standard Fee</td>
                  <td>Lifetime Member Fee</td>
                  <td>Price per KB</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="badge badge_green">Blind transfer</span>
                  </td>
                  <td>1</td>
                  <td>14,47296</td>
                  <td>0,001</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge badge_green">Blind transfer</span>
                  </td>
                  <td>1</td>
                  <td>14,47296</td>
                  <td>0,001</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commissions;
