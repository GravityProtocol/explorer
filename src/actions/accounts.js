import { Apis } from 'gravity-protocoljs-ws';
import { range } from 'lodash';

export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const SET_COUNT = 'SET_COUNT';
export const ADD_ACCOUNTS = 'ADD_ACCOUNTS';
export const RESET_ACCOUNTS = 'RESET_ACCOUNTS';
export const SET_LOADING = 'SET_LOADING';

export const PAGE_SIZE = 10;

const getCounts = () => Apis.instance().db_api().exec('get_account_count', []);

const getAccounts = ids =>
  Apis.instance().db_api().exec('get_full_accounts', [ids, true])
    .then((data) => {
      const accounts = {};

      data.forEach((item) => {
        const [id, account] = item;

        accounts[id] = account;
      });

      return accounts;
    });

export const fetchAccounts = () => (
  (dispatch) => {
    dispatch({
      type: SET_LOADING,
      data: true,
    });

    dispatch({ type: RESET_ACCOUNTS });

    getCounts()
      .then((count) => {
        dispatch({
          type: SET_COUNT,
          data: count,
        });

        const size = count > PAGE_SIZE ? PAGE_SIZE : count;
        const arr = range(size);
        const ids = arr.map(i => `1.2.${i}`);

        return getAccounts(ids);
      })
      .then((accounts) => {
        dispatch({
          type: ADD_ACCOUNTS,
          data: accounts,
        });
        dispatch({
          type: SET_LOADING,
          data: false,
        });
      });
  }
);

export const fetchMoreAccounts = ids => (
  (dispatch) => {
    getAccounts(ids)
      .then((accounts) => {
        dispatch({
          type: ADD_ACCOUNTS,
          data: accounts,
        });
      });
  }
);
