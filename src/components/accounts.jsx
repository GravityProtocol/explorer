import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { range } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { fetchMoreAccounts, PAGE_SIZE } from '../actions/accounts';
import IconSort from './icons/sort';
import IconSortFlip from './icons/sort-flip';
import { formatAmount, formatIndex } from '../utils/format';

function Accounts(props) {
  const list = Object.values(props.accounts);

  return (
    <div>
      <h2>Accounts</h2>

      <div className="table-wrapper">
        <table className="table table_responsive table_accounts">
          <thead className="table__head">
            <tr className="table__row">
              <th className="table__cell table__cell_id">
                <span className="inline inline_nowrap">
                  <span className="inline__item">ID</span>
                  <span className="inline__item">
                    <button className="table__sort-button">
                      <IconSort />
                    </button>
                  </span>
                </span>
              </th>
              <th className="table__cell table__cell_name">
                <span className="inline inline_nowrap">
                  <span className="inline__item">Name</span>
                  <span className="inline__item">
                    <button className="table__sort-button">
                      <IconSortFlip />
                    </button>
                  </span>
                </span>
              </th>
              <th className="table__cell table__cell_emission">
                <span className="inline inline_nowrap">
                  <span className="inline__item">Emission</span>
                  <span className="inline__item">
                    <button className="table__sort-button">
                      <IconSort />
                    </button>
                  </span>
                </span>
              </th>
              <th className="table__cell table__cell_index">
                <span className="inline inline_nowrap">
                  <span className="inline__item">Gravity Index</span>
                  <span className="inline__item">
                    <button className="table__sort-button">
                      <IconSort />
                    </button>
                  </span>
                </span>
              </th>
              <th className="table__cell table__cell_amount">
                <span className="inline inline_nowrap">
                  <span className="inline__item">Amount</span>
                  <span className="inline__item">
                    <button className="table__sort-button">
                      <IconSort />
                    </button>
                  </span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="table__body">
            {list.map(item => (
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

      {list.length < props.accountsCount && (
        <div className="section section_center-content">
          <button
            className="button button_gray"
            onClick={() => {
              const size = list.length;
              const arr = range(size, size + PAGE_SIZE);
              const ids = arr.map(i => `1.2.${i}`);

              props.fetchMoreAccounts(ids);
            }}
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}

Accounts.propTypes = {
  accounts: PropTypes.objectOf(PropTypes.any).isRequired,
  accountsCount: PropTypes.number.isRequired,
  fetchMoreAccounts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  accounts: state.accounts.data,
  accountsCount: state.accounts.count,
});

const mapDispatchToProps = dispatch => ({
  fetchMoreAccounts: ids => dispatch(fetchMoreAccounts(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
