import React from 'react';

function RecentActivity() {
  return (
    <div>
      <h2>Recent Activity</h2>
      <div className="table-wrapper">
        <table className="table table_responsive table_rounted-bottom-corners">
          <thead className="table__head">
            <tr className="table__row">
              <td className="table__cell">Operation</td>
              <td className="table__cell">Timestamp</td>
              <td className="table__cell">Block</td>
              <td className="table__cell">Type</td>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr className="table__row">
              <td className="table__cell" data-title="Operation">1.11.681742</td>
              <td className="table__cell" data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td className="table__cell" data-title="Block">2545085</td>
              <td className="table__cell" data-title="Type">
                <span className="badge badge_green">Blind transfer</span>
              </td>
            </tr>
            <tr className="table__row">
              <td className="table__cell" data-title="Operation">1.11.681742</td>
              <td className="table__cell" data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td className="table__cell" data-title="Block">2545085</td>
              <td className="table__cell" data-title="Type">
                <span className="badge badge_magenta">Blind transfer</span>
              </td>
            </tr>
            <tr className="table__row">
              <td className="table__cell" data-title="Operation">1.11.681742</td>
              <td className="table__cell" data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td className="table__cell" data-title="Block">2545085</td>
              <td className="table__cell" data-title="Type">
                <span className="badge badge_yellow">Blind transfer</span>
              </td>
            </tr>
            <tr className="table__row">
              <td className="table__cell" data-title="Operation">1.11.681742</td>
              <td className="table__cell" data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td className="table__cell" data-title="Block">2545085</td>
              <td className="table__cell" data-title="Type">
                <span className="badge badge_brown">Blind transfer</span>
              </td>
            </tr>
            <tr className="table__row">
              <td className="table__cell" data-title="Operation">1.11.681742</td>
              <td className="table__cell" data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td className="table__cell" data-title="Block">2545085</td>
              <td className="table__cell" data-title="Type">
                <span className="badge badge_cyan">Blind transfer</span>
              </td>
            </tr>
            <tr className="table__row">
              <td className="table__cell" data-title="Operation">1.11.681742</td>
              <td className="table__cell" data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td className="table__cell" data-title="Block">2545085</td>
              <td className="table__cell" data-title="Type">
                <span className="badge badge_red">Blind transfer</span>
              </td>
            </tr>
            <tr className="table__row">
              <td className="table__cell" data-title="Operation">1.11.681742</td>
              <td className="table__cell" data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td className="table__cell" data-title="Block">2545085</td>
              <td className="table__cell" data-title="Type">
                <span className="badge badge_blue">Blind transfer</span>
              </td>
            </tr>
            <tr className="table__row">
              <td className="table__cell" data-title="Operation">1.11.681742</td>
              <td className="table__cell" data-title="Timestamp"><i>25.06.2018, 11:01:51</i></td>
              <td className="table__cell" data-title="Block">2545085</td>
              <td className="table__cell" data-title="Type">
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
