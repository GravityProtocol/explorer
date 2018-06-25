import React from 'react';

function RecentActivity() {
  return (
    <div className="container">
      <div className="section">
        <div className="panel">
          <h2>Recent Activity</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Emission</td>
                  <td>Gravity Index</td>
                  <td>Amount</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.2.0</td>
                  <td><a href="/">committee-account</a></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.6</td>
                  <td><a href="/">init0</a></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.7</td>
                  <td><a href="/">init1</a></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.0</td>
                  <td><a href="/">init2</a></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.0</td>
                  <td><a href="/">init3</a></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.0</td>
                  <td><a href="/">init4</a></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0.005</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.0</td>
                  <td><a href="/">init4</a></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0.005</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.0</td>
                  <td><a href="/">init4</a></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0.005</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="section section_center-content">
        <button className="button button_white">Show more</button>
      </div>
    </div>
  );
}

export default RecentActivity;
