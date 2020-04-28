import React from "react";
import Input from "antd/lib/input";
import isNaN from "lodash/isNaN";

import classes from './InputEditor.module.css';
import { EditorsProps } from '../types';

const InputEditor: React.FC<EditorsProps> = ({
  dataIndex,
  record,
  toggleEdit,
  handleSave,
  ...props
}) => {
  const editorRef = React.useRef<Input>(null);
  const onInputSave = (
    event: React.KeyboardEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>
  ): void => {
    // Why currentTarget: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
    const { value } = event.currentTarget;
    const numberValue = Number(value);

    if (isNaN(numberValue)) {
      toggleEdit();
      return;
    }

    const row = { ...record, [dataIndex]: numberValue };

    toggleEdit();
    handleSave(row);
  };

  React.useEffect(() => {
    editorRef.current?.focus();
  }, []);

  return (
    <Input
      className={classes.input}
      onPressEnter={onInputSave}
      onBlur={onInputSave}
      defaultValue={Number(record[dataIndex])}
      ref={editorRef}
      {...props}
    />
  );
};

export default InputEditor;
