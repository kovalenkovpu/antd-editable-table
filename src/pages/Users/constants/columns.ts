import { TableColumnsEditable } from '../../../types/Table';
import { DataItem } from '../../../types/Users';
import selectRenderer from '../../../components/Table/CellRenderers/Select';
import checkboxRenderer from '../../../components/Table/CellRenderers/Checkbox';

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
  },
  {
    title: "Employed",
    dataIndex: "employed",
    width: "10%",
    render: checkboxRenderer,
    editable: true,
  }
];
