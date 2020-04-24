import selectRenderer from './CellRenderers/Select';

export const columns = [
  {
    title: "name",
    dataIndex: "name",
    width: "30%",
    editable: true,
    render: selectRenderer,
  },
  {
    title: "age",
    dataIndex: "age"
  },
  {
    title: "address",
    dataIndex: "address"
  }
];

export const dataSource = [
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

export const options = [
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
