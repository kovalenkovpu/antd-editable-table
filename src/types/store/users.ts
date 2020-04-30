import { ThunkDispatch } from 'redux-thunk';

import * as ACTION_TYPES from 'src/store/users/actionTypes';
import { CommonActionType, RootState } from './storeCommon';
import { DataItem } from '../Users';

export type UsersState = Readonly<{
  data: DataItem[];
}>;

export type FetchDataStart = CommonActionType<
  typeof ACTION_TYPES.FETCH_DATA_START
>;

export type FetchDataSuccess = CommonActionType<
  typeof ACTION_TYPES.FETCH_DATA_SUCCESS
> & {
  payload: {
    data: DataItem[];
  };
}

export type FetchDataFailure = CommonActionType<
  typeof ACTION_TYPES.FETCH_DATA_FAILURE
  >;

export type UpdateTableDataFailure = CommonActionType<
  typeof ACTION_TYPES.UPDATE_TABLE_DATA_FAILURE
>;

export type UpdateTableDataStart = CommonActionType<
  typeof ACTION_TYPES.UPDATE_TABLE_DATA_START
  >;

export type UpdateTableDataSuccess = CommonActionType<
  typeof ACTION_TYPES.UPDATE_TABLE_DATA_SUCCESS
  > & {
  payload: {
    data: DataItem[];
  };
}

export type UserActionTypes =
  FetchDataStart
  | FetchDataSuccess
  | FetchDataFailure
  | UpdateTableDataStart
  | UpdateTableDataSuccess
  | UpdateTableDataFailure;

export type Dispatch = ThunkDispatch<RootState, void, UserActionTypes>;
