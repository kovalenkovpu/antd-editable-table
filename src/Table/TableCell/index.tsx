import React, { useState, useEffect, useRef } from "react";

import { options } from '../constants';
import { AdditionalProps, DataItem } from "../types";
import SelectEditor from '../CellEditors/Select';

export const EditableCell: React.FC<AdditionalProps<DataItem>> = ({
  editable,
  record,
  dataIndex,
  handleSave,
  children,
  ...restProps
}) => {
  // const selectRef = useRef<HTMLSelectElement>(null);
  const [editing, setEditing] = useState<boolean>(false);

  const toggleEdit = (): void => setEditing(!editing);

  const onSave = (value: string): void => {
    // here we can inject any part of chosen option
    // because we have an access to option as a second argument in onSave
    // const value = get(option, 'data-option.name', '');
    const row = { ...record, [dataIndex]: value };

    console.log(row);
    toggleEdit();
    handleSave(row);
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <SelectEditor options={options} onSelect={onSave} value={record[dataIndex]}/>
    ) : (
      <div onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export default EditableCell;
