import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__table">
        <div className="dashboard__row">
          <div className="dashboard__cell">
            <div className="dashboard__value"><strong>24,620,608</strong></div>
            <div className="dashboard__title">Network Activity Index</div>
          </div>
          <div className="dashboard__cell">
            <div className="dashboard__value">6831</div>
            <div className="dashboard__title">All Users</div>
          </div>
          <div className="dashboard__cell">
            <div className="dashboard__value"><i>#</i>24 620 608</div>
            <div className="dashboard__title">Current Block</div>
          </div>
          <div className="dashboard__cell">
            <div className="dashboard__value">D3</div>
            <div className="dashboard__title">Transactions/Block</div>
          </div>
        </div>
        <div className="dashboard__row">
          <div className="dashboard__cell">
            <div className="dashboard__value">1 000 000 000 <i>ZGV</i></div>
            <div className="dashboard__title">Current Supply</div>
          </div>
          <div className="dashboard__cell">
            <div className="dashboard__value">14</div>
            <div className="dashboard__title">Active Witnesses</div>
          </div>
          <div className="dashboard__cell">
            <div className="dashboard__value">82</div>
            <div className="dashboard__title">Active Committee Members</div>
          </div>
          <div className="dashboard__cell">
            <div className="dashboard__value"><strong>24,620,608</strong></div>
            <div className="dashboard__title">Total Transactions</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
