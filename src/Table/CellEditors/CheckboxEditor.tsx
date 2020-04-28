import React from "react";
import Checkbox, {CheckboxChangeEvent} from "antd/lib/checkbox";

import classes from './InputEditor.module.css';
import { EditorsProps } from '../types';

const CheckboxEditor: React.FC<EditorsProps> = ({
  dataIndex,
  record,
  toggleEdit,
  handleSave,
  ...props
}) => {
  const editorRef = React.useRef<Checkbox>(null);
  const onCheckboxValueChange = (checked: boolean) => {
    const row = { ...record, [dataIndex]: checked };

    toggleEdit();
    handleSave(row);
  };
  const onCheck = (event: CheckboxChangeEvent): void => {
    const { checked } = event.target;

    onCheckboxValueChange(checked);
  };

  React.useEffect(() => {
    editorRef.current?.focus();
    onCheckboxValueChange(!record[dataIndex]);
  });

  return (
    <Checkbox
      className={classes.input}
      onChange={onCheck}
      checked={Boolean(record[dataIndex])}
      ref={editorRef}
      {...props}
    />
  );
};

export default CheckboxEditor;
