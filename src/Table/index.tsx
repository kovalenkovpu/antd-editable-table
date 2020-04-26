import React from "react";
import Table from "antd/lib/table";

import EditableCell from './TableCell';
import EditableRow from './TableRow';
import { columns, dataSource } from './constants';
import { DataItem, TableColumnEditable, AdditionalProps } from './types';

const components = {
  body: {
    row: EditableRow,
    cell: EditableCell
  }
};

interface EditableTableState {
  dataSource: DataItem[];
};

export default class EditableTable extends React.Component<{}, EditableTableState> {
  state = {
    dataSource,
  };

  columns = columns.map((col: TableColumnEditable<DataItem>) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      // onCell is called to extend props for the cell
      // it's 'additionalProps' prop on Cell props level
      onCell: (record: DataItem): AdditionalProps<DataItem> => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        handleSave: this.handleSave,

        // not clear why we need this prop to be passed, but doesn't work without
        children: col.children,
      }),
    };
  });

  handleSave = (row: DataItem): void => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(({ key }) => row.key === key);

    newData.splice(index, 1, row);

    this.setState({
      dataSource: newData
    });

    // setState(...) might be replaced with any other additional calls;
    // e.g. for storing data on redux level:
    // this.props.onCellEdit();
    // which should trigger appropriate action-thunk-dispatch chain
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
