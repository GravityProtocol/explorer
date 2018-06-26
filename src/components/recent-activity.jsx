import React from 'react';

function RecentActivity() {
  return (
    <div>
      <h2>Recent Activity</h2>
      <div className="table-wrapper">
        <table className="table_responsive">
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
              <td data-title="Operation">1.11.681742</td>
              <td data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td data-title="Block">2545085</td>
              <td data-title="Type">
                <span className="badge badge_green">Blind transfer</span>
              </td>
            </tr>
            <tr>
              <td data-title="Operation">1.11.681742</td>
              <td data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td data-title="Block">2545085</td>
              <td data-title="Type">
                <span className="badge badge_magenta">Blind transfer</span>
              </td>
            </tr>
            <tr>
              <td data-title="Operation">1.11.681742</td>
              <td data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td data-title="Block">2545085</td>
              <td data-title="Type">
                <span className="badge badge_yellow">Blind transfer</span>
              </td>
            </tr>
            <tr>
              <td data-title="Operation">1.11.681742</td>
              <td data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td data-title="Block">2545085</td>
              <td data-title="Type">
                <span className="badge badge_brown">Blind transfer</span>
              </td>
            </tr>
            <tr>
              <td data-title="Operation">1.11.681742</td>
              <td data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td data-title="Block">2545085</td>
              <td data-title="Type">
                <span className="badge badge_cyan">Blind transfer</span>
              </td>
            </tr>
            <tr>
              <td data-title="Operation">1.11.681742</td>
              <td data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td data-title="Block">2545085</td>
              <td data-title="Type">
                <span className="badge badge_red">Blind transfer</span>
              </td>
            </tr>
            <tr>
              <td data-title="Operation">1.11.681742</td>
              <td data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td data-title="Block">2545085</td>
              <td data-title="Type">
                <span className="badge badge_blue">Blind transfer</span>
              </td>
            </tr>
            <tr>
              <td data-title="Operation">1.11.681742</td>
              <td data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td data-title="Block">2545085</td>
              <td data-title="Type">
                <span className="badge badge_gray">Blind transfer</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentActivity;
