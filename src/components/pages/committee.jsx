import React, { PureComponent } from 'react';
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
              <CommitteeTable data={this.state.active} />
            ) : (
              <Blank type="article" />
            )}
          </div>
        </div>
        <div className="section">
          <div className="panel">
            {this.state.loaded ? (
              <CommitteeTable data={this.state.reserved} />
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
