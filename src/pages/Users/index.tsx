import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from 'src/types/store/storeCommon';
import { DataItem, DispatchProps, StateProps } from 'src/types/Users';
import { getTableData, updateTableData } from 'src/store/users/actions';
import { columns } from './constants/columns';
import Users from './Users';

const mapStateToProps = (store: RootState): StateProps => ({
  columns,
  data: store.users.data,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  // @ts-ignore
  getTableData: () => dispatch(getTableData()),
  // @ts-ignore
  updateTableData: (row: DataItem): Promise<void> => dispatch(updateTableData(row)),
});

// TODO: try to resolve
// TS2345: Argument of type
// 'ThunkAction<
//   void,
//   CombinedState<{ router: RouterState<PoorMansUnknown>; users: Readonly<{ data: DataItem[]; }>; }>,
//   void,
//   UserActionTypes
// >' is not assignable to parameter of type 'AnyAction'.  
//  
// Property 'type' is missing in type
// 'ThunkAction<
//   void,
//   CombinedState<{ router: RouterState<PoorMansUnknown>; users: Readonly<{ data: DataItem[]; }>; }>,
//   void,
//   UserActionTypes
// >' but required in type 'AnyAction'.

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Users);
