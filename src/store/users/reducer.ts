import {
  UsersState,
  UserActionTypes,
} from 'src/types/store/users';
import * as ACTION_TYPES from './actionTypes';

export const initialState: UsersState = {
  data: [],
};

export const users = (
  state: UsersState = initialState,
  action: UserActionTypes,
): UsersState => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA_START:
      return {
        ...state,
      };

    case ACTION_TYPES.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };

    case ACTION_TYPES.UPDATE_TABLE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };

    case ACTION_TYPES.FETCH_DATA_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};
