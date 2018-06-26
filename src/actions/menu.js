import { blockScreen, unblockScreen } from './screen';

export const SHOW_MENU = 'SHOW_MENU';
export const HIDE_MENU = 'HIDE_MENU';

export const showMenu = () => (
  (dispatch) => {
    dispatch(blockScreen());
    dispatch({
      type: SHOW_MENU,
    });
  }
);

export const hideMenu = () => (
  (dispatch) => {
    dispatch(unblockScreen());
    dispatch({
      type: HIDE_MENU,
    });
  }
);
