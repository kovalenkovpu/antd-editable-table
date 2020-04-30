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
  editable: boolean;
  editors: Editors<D>;
  updateTableData: (row: D) => void;
}

export default class EditableTable<D extends CommonDataItemType> extends React.Component<EditableTableProps<D>, {}> {
  columns = this.props.columns.map((col: TableColumnEditable<D>) => {
    const { editable, editors } = this.props;

    if (!col.editable || !editable) {
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
        editors,

        // not clear why we need this prop to be passed, but doesn't work without
        children: col.children,
      }),
    };
  });

  handleSave = (row: D): void => {
    this.props.updateTableData(row);
  };

  render() {
    return (
      <Table
        className={classes.table}
        components={components}
        columns={this.columns}
        rowClassName={classes.tableRow}
        dataSource={this.props.data}
        bordered
      />
    );
  }
}
