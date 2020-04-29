import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import 'antd/dist/antd.css';

import { store, history } from './store';
import Users from './pages/Users';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route exact path="" component={Users} />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
document.getElementById("container"));
