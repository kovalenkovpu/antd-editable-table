import { connect } from 'react-redux';

import { RootState } from 'src/types/storeCommon';
import { StateProps } from 'src/types/Users';
import { columns } from './constants/columns';
import { dataSource as data } from './constants/data';
import Users from './Users';

const mapStateToProps = (store: RootState): StateProps => ({
  columns,
  data,
});

// const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
//   fetchTestData: (): Promise<void> => dispatch(fetchTestData()),
// });

export const connector = connect(mapStateToProps, null);

export default connector(Users);
