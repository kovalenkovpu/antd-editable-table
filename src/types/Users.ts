import { CommonDataItemType, TableColumnsEditable } from './Table';

export interface DataItem extends CommonDataItemType {
  name: string;
  age: string;
  address: string;
  salary: number;
  employed: boolean;
}

export type StateProps = {
  columns: TableColumnsEditable<DataItem>;
  data: DataItem[];
};
