import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import App from './components/app';
import reducers from './reducers';
import { addResizeScreenListener, addScrollScreenListener } from './actions/screen';
import { initialize } from './actions/api';
import './index.less';

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducers),
  compose(applyMiddleware(
    routerMiddleware(history),
    thunk,
  )),
);

addResizeScreenListener(store.dispatch);
addScrollScreenListener(store.dispatch);
store.dispatch(initialize());

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('app'),
);
