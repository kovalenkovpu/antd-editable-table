import React, { useState, useEffect, useRef } from "react";

import { options } from '../constants';
import SelectEditor from '../CellEditors/Select';

export const EditableCell = ({
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const inputRef = useRef(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (editing) {
      // not really necessary
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => setEditing(!editing);

  const onSave = value => {
    // here we can inject any part of chosen option
    // because we have an access to option as a second argument in onSave
    // const value = get(option, 'data-option.name', '');
    const row = { ...record, [dataIndex]: value };

    toggleEdit();
    handleSave(row);
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <SelectEditor inputRef={inputRef} options={options} onSelect={onSave} value={record[dataIndex]}/>
    ) : (
      <div onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export default EditableCell;
