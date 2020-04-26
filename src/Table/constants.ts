import selectRenderer from './CellRenderers/Select';
import { DataItem, SelectOption, TableColumnsEditable } from './types';

export const columns: TableColumnsEditable<DataItem> = [
  {
    title: "name",
    dataIndex: "name",
    width: "30%",
    render: selectRenderer,
    // custom property, doesn't exist on types declaration of antd
    // that's why we extend TableColumn with it creating TableColumnsEditable
    editable: true,
  },
  {
    title: "age",
    dataIndex: "age",
    editable: false,
  },
  {
    title: "address",
    dataIndex: "address",
    editable: false,
  }
];

export const dataSource: DataItem[] = [
  {
    key: "0",
    name: '',
    age: "32",
    address: "London, Park Lane no. 0"
  },
  {
    key: "1",
    name: '',
    age: "32",
    address: "London, Park Lane no. 1"
  }
];

export const options: SelectOption[] = [
  {
    id: 0,
    name: "Lucy",
    born: 1986
  },
  {
    id: 1,
    name: "Jack",
    born: 1976
  },
  {
    id: 2,
    name: "Nick",
    born: 1966
  },
  {
    id: 3,
    name: "Andrew",
    born: 1956
  }
];
