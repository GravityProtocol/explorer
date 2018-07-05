import React, { PureComponent, Fragment } from 'react';
import CommitteeTable from 'components/committee-table';
import Blank from 'components/blank';
import { getCommittee } from 'utils/api';

class CommitteePage extends PureComponent {
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
    getCommittee()
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
                <h2>Active Committee</h2>
                <CommitteeTable data={this.state.active} />
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
                <h2>Reserve Committee</h2>
                <CommitteeTable data={this.state.reserved} />
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

export default CommitteePage;
