import * as ACTION_TYPES from './actionTypes';
import {
  FetchDataStart,
  FetchDataSuccess,
  FetchDataFailure,
  UpdateTableDataStart,
  UpdateTableDataSuccess,
  UpdateTableDataFailure,
  UserActionTypes,
  Dispatch,
} from 'src/types/store/users';
import { ThunkReturnType } from 'src/types/store/storeCommon';
import { DataItem } from 'src/types/Users';
import { dataSource } from 'src/pages/Users/constants/data';

const getTestData = (): Promise<{ data: DataItem[] }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: dataSource });
    }, 2000);
  });
};

export const fetchDataStart = (): FetchDataStart => ({
  type: ACTION_TYPES.FETCH_DATA_START,
});

export const fetchDataSuccess = (
  data: DataItem[],
): FetchDataSuccess => ({
  type: ACTION_TYPES.FETCH_DATA_SUCCESS,
  payload: {
    data,
  },
});

export const fetchDataFailure = (): FetchDataFailure => ({
  type: ACTION_TYPES.FETCH_DATA_FAILURE,
});

export const getTableData = (): ThunkReturnType<
  Promise<void>,
  UserActionTypes
> => async (dispatch: Dispatch): Promise<void> => {
  dispatch(fetchDataStart());

  try {
    const { data } = await getTestData();

    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure());
  }
};

export const updateTableDataStart = (): UpdateTableDataStart => ({
  type: ACTION_TYPES.UPDATE_TABLE_DATA_START,
});

export const updateTableDataSuccess = (
  data: DataItem[],
): UpdateTableDataSuccess => ({
  type: ACTION_TYPES.UPDATE_TABLE_DATA_SUCCESS,
  payload: {
    data,
  },
});

export const updateTableDataFailure = (): UpdateTableDataFailure => ({
  type: ACTION_TYPES.UPDATE_TABLE_DATA_FAILURE,
});

export const updateTableData = (row: DataItem): ThunkReturnType<
  void,
  UserActionTypes
> => (dispatch: Dispatch, getState): void => {
  dispatch(updateTableDataStart());

  try {
    const { users: { data } } = getState();
    const newData = [...data];
    const index = newData.findIndex(({ key }) => row.key === key);

    newData.splice(index, 1, row);
    dispatch(updateTableDataSuccess(newData));
  } catch (error) {
    dispatch(updateTableDataFailure());
  }
};
