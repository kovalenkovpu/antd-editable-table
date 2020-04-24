import React from "react";
import Table from "antd/lib/table";

import EditableCell from './TableCell';
import EditableRow from './TableRow';
import { columns, dataSource } from './constants';

const components = {
  body: {
    row: EditableRow,
    cell: EditableCell
  }
};

export default class EditableTable extends React.Component {
  state = {
    dataSource,
  };

  columns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: this.handleSave
      })
    };
  });

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(({ key }) => row.key === key);
    const item = newData[index];

    newData.splice(index, 1, { ...item, ...row });

    this.setState({
      dataSource: newData
    });

    // might be replaced with any other additional calls;
    // e.g. for storing data on redux level:
    // this.props.onCellEdit();
    // which should trigger appropriate action-thunk-dispatch
  };

  render() {
    return (
      <Table
        components={components}
        columns={this.columns}
        rowClassName={() => "editable-row"}
        dataSource={this.state.dataSource}
        bordered
      />
    );
  }
}
