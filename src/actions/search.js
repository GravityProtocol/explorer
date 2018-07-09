import { push } from 'connected-react-router';
import { getBlock, getAccount, getAccountByName } from 'utils/api';

export const ENABLE_SEARCH = 'ENABLE_SEARCH';
export const DISABLE_SEARCH = 'DISABLE_SEARCH';
export const SET_QUERY = 'SET_QUERY';
export const SET_NOT_FOUND_MESSAGE_VISIBLE = 'SET_NOT_FOUND_MESSAGE_VISIBLE';

export const enableSearch = () => ({
  type: ENABLE_SEARCH,
});

export const disableSearch = () => ({
  type: DISABLE_SEARCH,
});

export const setQuery = data => ({
  data,
  type: SET_QUERY,
});

export const setNotFoundMessageVisible = data => ({
  data,
  type: SET_NOT_FOUND_MESSAGE_VISIBLE,
});

export const resetSearch = () => (
  (dispatch) => {
    dispatch(setQuery(''));
    dispatch(disableSearch());
    dispatch(setNotFoundMessageVisible(false));
  }
);

export const search = query => (
  (dispatch) => {
    const isBlock = Number(query);
    const isAccountId = !isBlock && typeof query === 'string' && query.split('.').length === 3;

    let searchFn;

    if (isBlock) {
      searchFn = getBlock;
    } else if (isAccountId) {
      searchFn = getAccount;
    } else {
      searchFn = getAccountByName;
    }

    searchFn(query)
      .then((data) => {
        if (!data) {
          dispatch(setNotFoundMessageVisible(true));
          return;
        }

        dispatch(setNotFoundMessageVisible(false));
        dispatch(resetSearch());
        dispatch(push(`/${isBlock ? 'block' : 'accounts'}/${query}`));
      })
      .catch(() => {
        dispatch(setNotFoundMessageVisible(true));
      });
  }
);
