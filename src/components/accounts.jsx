import { range, sortBy } from 'lodash';
import { Link } from 'react-router-dom';
import React, { PureComponent } from 'react';
import IconSort from './icons/sort';
import IconSortFlip from './icons/sort-flip';
import { getAccountsCounts, getAccounts } from '../utils/api';
import { formatAmount, formatIndex } from '../utils/format';

const PAGE_SIZE = 10;
const COL_ID_ID = 0;
const COL_EMISSION_ID = 1;
const COL_NAME_ID = 2;
const COL_INDEX_ID = 3;
const COL_AMOUNT_ID = 4;
const ORDER_ASC_ID = 0;
const ORDER_DESC_ID = 1;

class Accounts extends PureComponent {
  constructor() {
    super();

    this.state = {
      accountsCount: 0,
      accounts: [],
      sortById: COL_ID_ID,
      orderId: ORDER_ASC_ID,
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
    let orderId;

    if (this.state.sortById === sortById) {
      orderId = this.state.orderId === ORDER_ASC_ID ? ORDER_DESC_ID : ORDER_ASC_ID;
    } else {
      orderId = ORDER_ASC_ID;
    }

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

    if (orderId === ORDER_DESC_ID) {
      accounts = accounts.reverse();
    }

    this.setState({
      accounts,
      sortById,
      orderId,
    });
  }

  render() {
    const sortIcon = this.state.orderId === ORDER_ASC_ID
      ? <IconSort />
      : <IconSortFlip />;

    return (
      <div>
        <h2>Accounts</h2>

        <div className="table-wrapper">
          <table className="table table_responsive table_accounts">
            <thead className="table__head">
              <tr className="table__row">
                <th className="table__cell table__cell_id">
                  <button
                    className="blank-button"
                    onClick={() => this.sort(COL_ID_ID)}
                  >
                    <span className="inline inline_nowrap">
                      <span className="inline__item">ID</span>
                      {this.state.sortById === COL_ID_ID && (
                        <span className="inline__item">{sortIcon}</span>
                      )}
                    </span>
                  </button>
                </th>
                <th className="table__cell table__cell_name">
                  <button
                    className="blank-button"
                    onClick={() => this.sort(COL_NAME_ID)}
                  >
                    <span className="inline inline_nowrap">
                      <span className="inline__item">Name</span>
                      {this.state.sortById === COL_NAME_ID && (
                        <span className="inline__item">{sortIcon}</span>
                      )}
                    </span>
                  </button>
                </th>
                <th className="table__cell table__cell_emission">
                  <button
                    className="blank-button"
                    onClick={() => this.sort(COL_EMISSION_ID)}
                  >
                    <span className="inline inline_nowrap">
                      <span className="inline__item">Emission</span>
                      {this.state.sortById === COL_EMISSION_ID && (
                        <span className="inline__item">{sortIcon}</span>
                      )}
                    </span>
                  </button>
                </th>
                <th className="table__cell table__cell_index">
                  <button
                    className="blank-button"
                    onClick={() => this.sort(COL_INDEX_ID)}
                  >
                    <span className="inline inline_nowrap">
                      <span className="inline__item">Gravity Index</span>
                      {this.state.sortById === COL_INDEX_ID && (
                        <span className="inline__item">{sortIcon}</span>
                      )}
                    </span>
                  </button>
                </th>
                <th className="table__cell table__cell_amount">
                  <button
                    className="blank-button"
                    onClick={() => this.sort(COL_AMOUNT_ID)}
                  >
                    <span className="inline inline_nowrap">
                      <span className="inline__item">Amount</span>
                      {this.state.sortById === COL_AMOUNT_ID && (
                        <span className="inline__item">{sortIcon}</span>
                      )}
                    </span>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="table__body">
              {this.state.accounts.map(item => (
                <tr className="table__row" key={item.account.id}>
                  <td className="table__cell table__cell_id" data-title="ID">{item.account.id}</td>
                  <td className="table__cell table__cell_name" data-title="Name"><Link to="/accounts/test">{item.account.name}</Link></td>
                  <td className="table__cell table__cell_emission" data-title="Emission">{formatAmount(item.account.emission_volume)}&nbsp;<i>ZVG</i></td>
                  <td className="table__cell table__cell_index" data-title="Gravity Index">{formatIndex(item.account.activity_index)}</td>
                  <td className="table__cell table__cell_amount" data-title="Amount">{item.balances[0] ? formatAmount(item.balances[0].balance) : 0}&nbsp;<i>ZVG</i></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {this.state.accounts.length < this.state.accountsCount && (
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
      </div>
    );
  }
}

export default Accounts;
