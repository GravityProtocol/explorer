import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { getHistory } from 'utils/api';
import Blank from 'components/blank';
import Item from './item';

const PAGE_SIZE = 10;

class RecentActivity extends PureComponent {
  constructor() {
    super();

    this.state = {
      history: [],
      loaded: false,
    };
  }

  componentDidMount() {
    getHistory(this.props.id, '1.11.9999999999', PAGE_SIZE)
      .then((history) => {
        this.setState({
          history,
          loaded: true,
        });
      });
  }

  showMoreHistory() {
    const lastItem = this.state.history[this.state.history.length - 1];
    const lastId = `1.11.${+lastItem.id.split('.')[2] - 1}`;

    getHistory(this.props.id, lastId)
      .then((history) => {
        this.setState(prevState => ({
          history: prevState.history.concat(history),
        }));
      });
  }

  render() {
    if (!this.state.loaded) {
      return (
        <Blank type="article" />
      );
    }

    const { history } = this.state;
    const showMoreButton = history.length !== this.props.totalOps && history.length > 0;

    return (
      <div>
        <h2>Recent Activity</h2>

        <div className="table-wrapper">
          <table
            className={classNames(
              'table',
              'table_recent-activity',
              'table_responsive',
              'table_accounts',
              { 'table_rounted-bottom-corners': !showMoreButton },
            )}
          >
            <thead className="table__head">
              <tr className="table__row">
                <td className="table__cell table__cell_operation">Operation</td>
                <td className="table__cell table__cell_timestamp">Timestamp</td>
                <td className="table__cell table__cell_block">Block</td>
                <td className="table__cell table__cell_type">Type</td>
              </tr>
            </thead>
            <tbody className="table__body">
              {history.map(item => (
                <Item
                  key={item.id}
                  id={item.id}
                  blockNum={item.block_num}
                  op={item.op[0]}
                />
              ))}
            </tbody>
          </table>
          {this.state.loaded && this.state.history.length === 0 && (
            <div className="table-wrapper__empty-message">No recent activity</div>
          )}
        </div>

        {showMoreButton && (
          <div className="section section_center-content">
            <button
              className="button button_gray"
              onClick={() => this.showMoreHistory()}
            >
              Show more
            </button>
          </div>
        )}
      </div>
    );
  }
}

RecentActivity.propTypes = {
  id: PropTypes.string.isRequired,
  totalOps: PropTypes.number.isRequired,
};

export default RecentActivity;
