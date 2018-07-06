import PropTypes from 'prop-types';
import React from 'react';
import { formatAmount } from 'utils/format';

const Dashboard = props => (
  <div className="dashboard">
    <div className="container">
      <div className="dashboard__table">
        <div className="dashboard__row">
          <div className="dashboard__cell">
            <div className="dashboard__value">{props.data.usersCount}</div>
            <div className="dashboard__title">All Users</div>
          </div>
          <div className="dashboard__cell">
            <div className="dashboard__value"><i>#</i>{Math.floor(props.data.currentBlock).toLocaleString('ru-RU')}</div>
            <div className="dashboard__title">Current Block</div>
          </div>
          <div className="dashboard__cell">
            <div className="dashboard__value">{Math.floor(props.data.totalTransactions).toLocaleString('ru-RU')}</div>
            <div className="dashboard__title">Total Transactions</div>
          </div>
          <div className="dashboard__cell">
            <div className="dashboard__value">d3.js</div>
            <div className="dashboard__title">Transactions/Block</div>
          </div>
        </div>
        <div className="dashboard__row">
          <div className="dashboard__cell">
            <div className="dashboard__value">{formatAmount(props.data.currentSupply)}&nbsp;<i>ZGV</i></div>
            <div className="dashboard__title">Current Supply</div>
          </div>
          <div className="dashboard__cell">
            <div className="dashboard__value">{props.data.activeWitnesses}</div>
            <div className="dashboard__title">Active Witnesses</div>
          </div>
          <div className="dashboard__cell">
            <div className="dashboard__value">{props.data.activeCommittee}</div>
            <div className="dashboard__title">Active Committee Members</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Dashboard.propTypes = {
  data: PropTypes.shape({
    usersCount: PropTypes.number,
    currentBlock: PropTypes.number,
    totalTransactions: PropTypes.number,
    currentSupply: PropTypes.number,
    activeWitnesses: PropTypes.number,
    activeCommittee: PropTypes.number,
  }).isRequired,
};

export default Dashboard;
