import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

// example implementation
// import { user } from './user/reducer';

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  // user,
});

export default rootReducer;
