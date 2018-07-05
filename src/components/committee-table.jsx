import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { PureComponent } from 'react';
import SortColButton from 'components/sort-col-button';
import { formatUrl, formatAmount } from 'utils/format';
import LinkIcon from 'components/link-icon';
import { sortBy } from 'lodash';

const COL_ID_RANK = 0;
const COL_ID_ID = 1;
const COL_ID_ACCOUNT = 2;
const COL_ID_URL = 3;
const COL_ID_TOTAL_VOTES = 4;

class CommitteeTable extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      sortById: COL_ID_TOTAL_VOTES,
      orderIsAsc: false,
    };
  }

  sort(sortById) {
    const orderIsAsc = this.state.sortById === sortById
      ? !this.state.orderIsAsc
      : true;

    let data = sortBy(this.state.data, (item) => {
      switch (sortById) {
        case COL_ID_RANK:
          return +item.rank;
        case COL_ID_ID:
          return +item.id.split('.').join('');
        case COL_ID_ACCOUNT:
          return item.name;
        case COL_ID_URL:
          return item.url;
        default:
          return +item.total_votes;
      }
    });

    if (!orderIsAsc) {
      data = data.reverse();
    }

    this.setState({
      data,
      sortById,
      orderIsAsc,
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <table className="table table_responsive table_committee table_rounted-bottom-corners">
          <thead className="table__head">
            <tr className="table__row">
              <th className="table__cell table__cell_rank">
                <SortColButton
                  title="Rank"
                  onClick={() => this.sort(COL_ID_RANK)}
                  isSorted={this.state.sortById === COL_ID_RANK}
                  orderIsAsc={this.state.orderIsAsc}
                />
              </th>
              <th className="table__cell table__cell_id">
                <SortColButton
                  title="ID"
                  onClick={() => this.sort(COL_ID_ID)}
                  isSorted={this.state.sortById === COL_ID_ID}
                  orderIsAsc={this.state.orderIsAsc}
                />
              </th>
              <th className="table__cell table__cell_account">
                <SortColButton
                  title="Account"
                  onClick={() => this.sort(COL_ID_ACCOUNT)}
                  isSorted={this.state.sortById === COL_ID_ACCOUNT}
                  orderIsAsc={this.state.orderIsAsc}
                />
              </th>
              <th className="table__cell table__cell_url">
                <SortColButton
                  title="URL"
                  onClick={() => this.sort(COL_ID_URL)}
                  isSorted={this.state.sortById === COL_ID_URL}
                  orderIsAsc={this.state.orderIsAsc}
                />
              </th>
              <th className="table__cell table__cell_total-votes">
                <SortColButton
                  title="Total Votes"
                  onClick={() => this.sort(COL_ID_TOTAL_VOTES)}
                  isSorted={this.state.sortById === COL_ID_TOTAL_VOTES}
                  orderIsAsc={this.state.orderIsAsc}
                />
              </th>
            </tr>
          </thead>
          <tbody className="table__body">
            {this.state.data.map(item => (
              <tr className="table__row" key={item.id}>
                <td className="table__cell table__cell_rank" data-title="Rank">{item.rank}</td>
                <td className="table__cell table__cell_id" data-title="ID">{item.id}</td>
                <td className="table__cell table__cell_account" data-title="Account">
                  <Link to={`/accounts/${item.name}`}>{item.name}</Link>
                </td>
                <td className="table__cell table__cell_url" data-title="URL">
                  <LinkIcon url={formatUrl(item.url)} />
                </td>
                <td className="table__cell table__cell_total-votes" data-title="Total Votes">
                  {formatAmount(item.total_votes)}&nbsp;<i>ZVG</i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!this.state.data.length && (
          <div className="table-wrapper__empty-message">No witnesses</div>
        )}
      </div>
    );
  }
}

CommitteeTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    rank: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    total_votes: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  })).isRequired,
};

export default CommitteeTable;
