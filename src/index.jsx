import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './containers/app';
import reducers from './reducers';
import { addResizeScreenListener, addScrollScreenListener } from './actions/screen';
import { initialize } from './actions/api';
import './index.less';

const store = createStore(reducers, applyMiddleware(thunk));

addResizeScreenListener(store.dispatch);
addScrollScreenListener(store.dispatch);
store.dispatch(initialize());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
