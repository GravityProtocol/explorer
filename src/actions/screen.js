import _ from 'lodash';

export const SET_SCREEN_TYPE = 'SET_SCREEN_TYPE';
export const SET_SCROLL_ACTIVE = 'SET_SCROLL_ACTIVE';
export const SET_BLOCKED = 'SET_BLOCKED';

export const screenTypes = {
  LARGE: 'LARGE',
  DESKTOP: 'DESKTOP',
  TABLET: 'TABLET',
  PHONE: 'PHONE',
};

export const getScreenType = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    return screenTypes.PHONE;
  } else if (window.matchMedia('(max-width: 1023px)').matches) {
    return screenTypes.TABLET;
  } else if (window.matchMedia('(max-width: 1279px)').matches) {
    return screenTypes.DESKTOP;
  }

  return screenTypes.LARGE;
};

export const addResizeScreenListener = (dispatch) => {
  window.addEventListener('resize', _.throttle(() => {
    dispatch({
      type: SET_SCREEN_TYPE,
      data: getScreenType(),
    });
  }, 100));
};

export const addScrollScreenListener = (dispatch) => {
  window.addEventListener('scroll', _.throttle(() => {
    dispatch({
      type: SET_SCROLL_ACTIVE,
      data: window.pageYOffset > 0,
    });
  }, 100));
};

export const blockScreen = () => (
  (dispatch) => {
    const app = document.querySelector('.app');

    app.style.top = `-${window.pageYOffset}px`;
    app.classList.add('app_blocked');

    dispatch({
      type: SET_BLOCKED,
      data: true,
    });
  }
);

export const unblockScreen = () => (
  (dispatch) => {
    const app = document.querySelector('.app');
    const topOffset = parseInt(app.style.top, 10);

    app.classList.remove('app_blocked');
    app.style.top = '';
    window.scrollTo(0, Math.abs(topOffset));

    dispatch({
      type: SET_BLOCKED,
      data: false,
    });
  }
);
