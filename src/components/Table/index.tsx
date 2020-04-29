import React from 'react';
import Table from 'antd/lib/table';

import {
  TableColumnEditable,
  TableColumnsEditable,
  AdditionalCellProps,
  CommonDataItemType,
  Editors,
} from 'src/types/Table';
import EditableCell from './TableCell';
import EditableRow from './TableRow';
import classes from './Table.module.css';

const components = {
  body: {
    row: EditableRow,
    cell: EditableCell,
  }
};

interface EditableTableProps<D> {
  columns: TableColumnsEditable<D>;
  data: Array<D>;
  editors: Editors<D>;
}

interface EditableTableState<D> {
  dataSource: Array<D>;
}

export default class EditableTable<D extends CommonDataItemType> extends React.Component<EditableTableProps<D>, EditableTableState<D>> {
  state = {
    dataSource: this.props.data,
  };

  columns = this.props.columns.map((col: TableColumnEditable<D>) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      // onCell is called to extend props for the cell
      // it's 'additionalProps' prop on Cell props level
      onCell: (record: D): AdditionalCellProps<D> => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        handleSave: this.handleSave,

        // not clear why we need this prop to be passed, but doesn't work without
        children: col.children,
        editors: this.props.editors,
      }),
    };
  });

  handleSave = (row: D): void => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(({ key }) => row.key === key);

    newData.splice(index, 1, row);

    this.setState({
      dataSource: newData,
    });

    // setState(...) might be replaced with any other additional calls;
    // e.g. for storing data on redux level:
    // this.props.onCellEdit();
    // which should trigger appropriate action-thunk-dispatch chain
  };

  render() {
    return (
      <Table
        className={classes.table}
        components={components}
        columns={this.columns}
        rowClassName={classes.tableRow}
        dataSource={this.state.dataSource}
        bordered
      />
    );
  }
}
