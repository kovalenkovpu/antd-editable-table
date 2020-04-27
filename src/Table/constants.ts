import selectRenderer from './CellRenderers/Select';
import { DataItem, SelectOption, TableColumnsEditable } from './types';

export const columns: TableColumnsEditable<DataItem> = [
  {
    title: "Name",
    dataIndex: "name",
    width: "30%",
    // if it's needed to customize component for displaying data
    render: selectRenderer,
    // custom property, doesn't exist on types declaration of antd
    // that's why we extend TableColumn with it creating TableColumnsEditable
    editable: true,
  },
  {
    title: "Age",
    dataIndex: "age",
    editable: false,
  },
  {
    title: "Address",
    dataIndex: "address",
    editable: false,
  },
  {
    title: "Salary",
    dataIndex: "salary",
    width: "20%",
    editable: true,
  }
];

export const dataSource: DataItem[] = [
  {
    key: "0",
    name: 'Jack',
    age: "32",
    address: "London, Park Lane no. 0",
    salary: '0',
  },
  {
    key: "1",
    name: '',
    age: "32",
    address: "London, Park Lane no. 1",
    salary: '0',
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
