import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { users } from './users/reducer';

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  users,
});

export default rootReducer;
