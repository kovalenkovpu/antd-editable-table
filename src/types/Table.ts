import React from 'react';
import { ColumnProps } from 'antd/lib/table';

export interface CommonDataItemType {
  key: string;
}

export interface EditableRowProps {
  // row component might be extended with any additional props here
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
  editors: Editors<T>;
  // not clear why we need this prop to be passed, but doesn't work without
  children: React.ReactNode;
};

// EDITORS
export type Editors<T> = {
  // https://github.com/microsoft/TypeScript/issues/24220#issuecomment-504285702
  [key in keyof T]?: React.ElementType;
}

// D - generic type for Data record
// O - generic type for Option for Select component
export interface EditorsProps<D, O> {
  dataIndex: keyof D;
  record: D;
  toggleEdit: () => void;
  handleSave: (record: D) => void;
  editors: Editors<D>;
}

export interface GenericSelectorEditorsProps<D, O> extends EditorsProps<D, O > {
  // comes from entity-specific editor
  options: Array<O>;
  optionLabelProp: 'value' | 'label';
  optionKey: keyof O;
  optionValue: keyof O;
  renderOption: (option: O) => React.ReactNode;
}
