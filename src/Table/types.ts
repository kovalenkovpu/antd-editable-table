import React from "react";
import { ColumnProps } from 'antd/lib/table';

export interface EditableRowProps {
  // row component might be extended with any additional props here
}

// the same as table 'row'
export interface DataItem {
  key: string;
  name: string;
  age: string;
  address: string;
  salary: number;
  employed: boolean;
}

// TODO: ColumnProps should (?) contain 'editable' prop
//  but it doesn't
export type TableColumnEditable<T> = ColumnProps<T> & {
  editable: boolean;
  dataIndex: keyof T;
};
export type TableColumnsEditable<T> = TableColumnEditable<T>[];

export type AdditionalCellProps<T> = {
  record: T;
  editable?: boolean;
  dataIndex: keyof T;
  handleSave: (record: T) => void;
  // not clear why we need this prop to be passed, but doesn't work without
  children: React.ReactNode;
};

export interface SelectOption {
  id: number;
  name: string;
  born: number;
}

// EDITORS
export type Editors = {
  // https://github.com/microsoft/TypeScript/issues/24220#issuecomment-504285702
  [key in keyof DataItem]?: React.ElementType;
}

export interface EditorsProps {
  dataIndex: keyof DataItem;
  record: DataItem;
  toggleEdit: () => void;
  handleSave: (record: DataItem) => void;
}
