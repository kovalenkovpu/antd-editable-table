// import React from 'react';
import { ColumnProps } from 'antd/lib/table';

export interface EditableRowProps {
  // index: number;
  key: string;
  // record: DataItem;
};

export interface DataItem {
  key: string;
  name: string;
  age: string;
  address: string;
};

// TODO: ColumnProps should contain editable prop
//  but it doesn't
// export interface TableColumn<T> extends ColumnProps<T> {
export type TableColumn<T> = ColumnProps<T>;
export type TableColumns<T> = ColumnProps<T>[];

export type TableColumnEditable<T> = TableColumn<T> & {
  editable: boolean;
  dataIndex: keyof T;
};
export type TableColumnsEditable<T> = TableColumnEditable<T>[];

export type AdditionalProps<T> = {
  editable: boolean;
  record: T;
  dataIndex: keyof T;
  handleSave: (row: T) => void;
  // blabla: string;
  children: React.ReactNode;
};

export interface SelectOption {
  id: number;
  name: string;
  born: number;
};

export interface SelectEditorProps {
  options: SelectOption[];
  // selectRef: React.RefObject<HTMLSelectElement>;
  onSelect: (value: string) => void;
  value: string;
};
