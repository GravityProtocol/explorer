import React from 'react';

function RecentActivity() {
  return (
    <div className="container">
      <div className="section">
        <div className="panel">
          <h2>Recent Activity</h2>
          <div className="table-wrapper">
            <table className="table_rounted-bottom-corner">
              <thead>
                <tr>
                  <td>Operation</td>
                  <td>Timestamp</td>
                  <td>Block</td>
                  <td>Type</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.11.681742</td>
                  <td><i>25.06.2018, 11:01:51</i></td>
                  <td>2545085</td>
                  <td>
                    <span className="badge badge_green">Blind transfer</span>
                  </td>
                </tr>
                <tr>
                  <td>1.11.681742</td>
                  <td><i>25.06.2018, 11:01:51</i></td>
                  <td>2545085</td>
                  <td>
                    <span className="badge badge_purple">Transfer to blind</span>
                  </td>
                </tr>
                <tr>
                  <td>1.11.681742</td>
                  <td><i>25.06.2018, 11:01:51</i></td>
                  <td>2545085</td>
                  <td>
                    <span className="badge badge_magenta">Account update</span>
                  </td>
                </tr>
                <tr>
                  <td>1.11.681742</td>
                  <td><i>25.06.2018, 11:01:51</i></td>
                  <td>2545085</td>
                  <td>
                    <span className="badge badge_yellow">Blind transfer</span>
                  </td>
                </tr>
                <tr>
                  <td>1.11.681742</td>
                  <td><i>25.06.2018, 11:01:51</i></td>
                  <td>2545085</td>
                  <td>
                    <span className="badge badge_brown">Blind transfer</span>
                  </td>
                </tr>
                <tr>
                  <td>1.11.681742</td>
                  <td><i>25.06.2018, 11:01:51</i></td>
                  <td>2545085</td>
                  <td>
                    <span className="badge badge_cyan">Blind transfer</span>
                  </td>
                </tr>
                <tr>
                  <td>1.11.681742</td>
                  <td><i>25.06.2018, 11:01:51</i></td>
                  <td>2545085</td>
                  <td>
                    <span className="badge badge_dark">Blind transfer</span>
                  </td>
                </tr>
                <tr>
                  <td>1.11.681742</td>
                  <td><i>25.06.2018, 11:01:51</i></td>
                  <td>2545085</td>
                  <td>
                    <span className="badge badge_blue">Blind transfer</span>
                  </td>
                </tr>
                <tr>
                  <td>1.11.681742</td>
                  <td><i>25.06.2018, 11:01:51</i></td>
                  <td>2545085</td>
                  <td>
                    <span className="badge badge_pink">Blind transfer</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
