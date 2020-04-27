import React from "react";
import Input from "antd/lib/input";

import classes from './InputEditor.module.css';
import { EditorsProps } from '../types';
import isEmpty from "lodash/isEmpty";

const InputEditor: React.FC<EditorsProps> = ({
  dataIndex,
  record,
  toggleEdit,
  handleSave,
  ...props
}) => {
  const onInputSave = (
    event: React.KeyboardEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>
  ): void => {
    // Why currentTarget: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
    const { value } = event.currentTarget;
    const row = { ...record, [dataIndex]: isEmpty(value) ? '0' : value };

    toggleEdit();
    handleSave(row);
  };

  return (
    <Input
      className={classes.input}
      onPressEnter={onInputSave}
      onBlur={onInputSave}
      defaultValue={record[dataIndex]}
      {...props}
    />
  );
};

export default InputEditor;
