import React from 'react';
import Checkbox, { CheckboxChangeEvent } from 'antd/lib/checkbox';

import { EditorsProps } from 'src/types/Table';
import classes from '../GenericInputEditor/InputEditor.module.css';

export const GenericCheckboxEditor = <D,>(props: EditorsProps<D>) => {
  const {
    dataIndex,
    record,
    toggleEdit,
    handleSave,
    ...restProps
  } = props;
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
      {...restProps}
    />
  );
};
