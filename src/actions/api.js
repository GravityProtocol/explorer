import { initializeApi } from '../utils/api';

export const SET_INITIALIZED = 'SET_INITIALIZED';

export const initialize = () => (
  (dispatch) => {
    initializeApi()
      .then(() => {
        dispatch({
          type: SET_INITIALIZED,
          data: true,
        });
      });
  }
);
