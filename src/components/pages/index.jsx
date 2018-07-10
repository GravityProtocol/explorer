import React, { PureComponent, Fragment } from 'react';
import Dashboard from 'components/dashboard';
import LastTransactions from 'components/last-transactions';
import { getDashbord, getRecentTransactions } from 'utils/api';
import DashboardBlank from 'components/dashboard-blank';
import Blank from 'components/blank';

class HomePage extends PureComponent {
  constructor() {
    super();

    this.state = {
      lastTransactions: [],
      dashboard: {},
      loaded: false,
    };
  }

  componentDidMount() {
    this.getData();

    this.interval = setInterval(() => {
      this.getData();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData() {
    Promise.all([
      getRecentTransactions(),
      getDashbord(),
    ])
      .then((data) => {
        const lastTransactions = data[0];
        const dashboard = data[1];
        const totalTransactions = +lastTransactions[0].id.split('.')[2];

        this.setState({
          lastTransactions,
          dashboard: { ...dashboard, totalTransactions },
          loaded: true,
        });
      });
  }

  render() {
    return (
      <Fragment>
        {!this.state.loaded ? (
          <DashboardBlank />
        ) : (
          <Dashboard data={this.state.dashboard} />
        )}

        <div className="container">
          <div className="section">
            <div className="panel">
              {!this.state.loaded ? (
                <Blank type="article" />
              ) : (
                <LastTransactions data={this.state.lastTransactions} />
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
