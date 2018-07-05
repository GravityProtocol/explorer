import React, { PureComponent, Fragment } from 'react';
import WitnessesTable from 'components/witnesses-table';
import Blank from 'components/blank';
import { getWitnesses } from 'utils/api';

class WitnessesPage extends PureComponent {
  constructor() {
    super();

    this.state = {
      loaded: false,
      active: [],
      reserved: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getWitnesses()
      .then(({ active, reserved }) => {
        this.setState({
          active,
          reserved,
          loaded: true,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="panel">
            {this.state.loaded ? (
              <Fragment>
                <h2>Active Witnesses</h2>
                <WitnessesTable data={this.state.active} />
              </Fragment>
            ) : (
              <Blank type="article" />
            )}
          </div>
        </div>
        <div className="section">
          <div className="panel">
            {this.state.loaded ? (
              <Fragment>
                <h2>Reserve Witnesses</h2>
                <WitnessesTable data={this.state.reserved} />
              </Fragment>
            ) : (
              <Blank type="article" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default WitnessesPage;
