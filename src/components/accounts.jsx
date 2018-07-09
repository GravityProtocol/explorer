import classNames from 'classnames';
import { range, sortBy } from 'lodash';
import { Link } from 'react-router-dom';
import React, { PureComponent, Fragment } from 'react';
import { getAccountsCounts, getAccounts } from 'utils/api';
import { formatAmount, formatIndex } from 'utils/format';
import SortColButton from 'components/sort-col-button';
import Blank from 'components/blank';

const PAGE_SIZE = 10;
const COL_ID_ID = 0;
const COL_EMISSION_ID = 1;
const COL_NAME_ID = 2;
const COL_INDEX_ID = 3;
const COL_AMOUNT_ID = 4;

class Accounts extends PureComponent {
  constructor() {
    super();

    this.state = {
      accountsCount: 0,
      accounts: [],
      sortById: COL_ID_ID,
      orderIsAsc: true,
      loaded: false,
    };
  }

  componentDidMount() {
    getAccountsCounts()
      .then((accountsCount) => {
        const size = accountsCount > PAGE_SIZE ? PAGE_SIZE : accountsCount;
        const arr = range(size);
        const ids = arr.map(i => `1.2.${i}`);

        return getAccounts(ids)
          .then((data) => {
            const accounts = Object.values(data);

            this.setState({
              accountsCount,
              accounts,
              loaded: true,
            });
          });
      });
  }

  loadMoreAccounts(ids) {
    getAccounts(ids)
      .then((data) => {
        const accounts = Object.values(data);

        this.setState(prevState => ({
          accounts: prevState.accounts.concat(accounts),
        }));
      });
  }

  sort(sortById) {
    const orderIsAsc = this.state.sortById === sortById
      ? !this.state.orderIsAsc
      : true;

    let accounts = sortBy(this.state.accounts, (item) => {
      switch (sortById) {
        case COL_NAME_ID:
          return item.account.name;
        case COL_EMISSION_ID:
          return +item.account.emission_volume;
        case COL_INDEX_ID:
          return +item.account.activity_index;
        case COL_AMOUNT_ID:
          return item.balances[0] ? +(item.balances[0].balance) : 0;
        default:
          return +item.account.id.split('.').join('');
      }
    });

    if (!orderIsAsc) {
      accounts = accounts.reverse();
    }

    this.setState({
      accounts,
      sortById,
      orderIsAsc,
    });
  }

  render() {
    if (!this.state.loaded) {
      return <Blank type="article" />;
    }

    const showMoreButton = this.state.accounts.length < this.state.accountsCount;

    return (
      <Fragment>
        <h2>Accounts</h2>

        <div className="table-wrapper">
          <table
            className={classNames(
              'table',
              'table_responsive',
              'table_accounts',
              { 'table_rounted-bottom-corners': !showMoreButton },
            )}
          >
            <thead className="table__head">
              <tr className="table__row">
                <th className="table__cell table__cell_id">
                  <SortColButton
                    title="ID"
                    onClick={() => this.sort(COL_ID_ID)}
                    isSorted={this.state.sortById === COL_ID_ID}
                    orderIsAsc={this.state.orderIsAsc}
                  />
                </th>
                <th className="table__cell table__cell_name">
                  <SortColButton
                    title="Name"
                    onClick={() => this.sort(COL_NAME_ID)}
                    isSorted={this.state.sortById === COL_NAME_ID}
                    orderIsAsc={this.state.orderIsAsc}
                  />
                </th>
                <th className="table__cell table__cell_emission">
                  <SortColButton
                    title="Emission"
                    onClick={() => this.sort(COL_EMISSION_ID)}
                    isSorted={this.state.sortById === COL_EMISSION_ID}
                    orderIsAsc={this.state.orderIsAsc}
                  />
                </th>
                <th className="table__cell table__cell_index">
                  <SortColButton
                    title="Gravity Index"
                    onClick={() => this.sort(COL_INDEX_ID)}
                    isSorted={this.state.sortById === COL_INDEX_ID}
                    orderIsAsc={this.state.orderIsAsc}
                  />
                </th>
                <th className="table__cell table__cell_amount">
                  <SortColButton
                    title="Amount"
                    onClick={() => this.sort(COL_AMOUNT_ID)}
                    isSorted={this.state.sortById === COL_AMOUNT_ID}
                    orderIsAsc={this.state.orderIsAsc}
                  />
                </th>
              </tr>
            </thead>
            <tbody className="table__body">
              {this.state.accounts.map(item => (
                <tr className="table__row" key={item.account.id}>
                  <td className="table__cell table__cell_id" data-title="ID">{item.account.id}</td>
                  <td className="table__cell table__cell_name" data-title="Name"><Link to={`/accounts/${item.account.name}`}>{item.account.name}</Link></td>
                  <td className="table__cell table__cell_emission" data-title="Emission">{formatAmount(item.account.emission_volume)}&nbsp;<i>ZVG</i></td>
                  <td className="table__cell table__cell_index" data-title="Gravity Index">{formatIndex(item.account.activity_index)}</td>
                  <td className="table__cell table__cell_amount" data-title="Amount">{item.balances[0] ? formatAmount(item.balances[0].balance) : 0}&nbsp;<i>ZVG</i></td>
                </tr>
              ))}
            </tbody>
          </table>
          {this.state.loaded && this.state.accounts.length === 0 && (
            <div className="table-wrapper__empty-message">No accounts</div>
          )}
        </div>

        {showMoreButton && (
          <div className="section section_center-content">
            <button
              className="button button_gray"
              onClick={() => {
                const size = this.state.accounts.length;
                const arr = range(size, size + PAGE_SIZE);
                const ids = arr.map(i => `1.2.${i}`);

                this.loadMoreAccounts(ids);
              }}
            >
              Show more
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Accounts;
