import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';

import createRootReducer from './rootReducer';

export const history = createBrowserHistory();

export const rootReducer = createRootReducer(history);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    routerMiddleware(history),
    thunkMiddleware,
  )),
);
