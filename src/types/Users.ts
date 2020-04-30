import { ConnectedProps } from 'react-redux';

import { CommonDataItemType, TableColumnsEditable } from './Table';
import { connector } from 'src/pages/Users';

export interface DataItem extends CommonDataItemType {
  name: string;
  age: string;
  address: string;
  salary: number;
  employed: boolean;
}

export interface StateProps {
  columns: TableColumnsEditable<DataItem>;
  data: DataItem[];
}

export interface DispatchProps {
  getTableData: () => Promise<void>;
  updateTableData: (row: DataItem) => void;
}

export type ConnectedUsersPageProps = ConnectedProps<typeof connector>;
