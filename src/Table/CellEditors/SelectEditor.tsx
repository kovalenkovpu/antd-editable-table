import React from "react";
import Select from "antd/lib/select";

import classes from './SelectEditor.module.css';
import { SelectOption, EditorsProps } from '../types';
import { options } from '../constants';

const SelectEditor: React.FC<EditorsProps> = ({
  dataIndex,
  record,
  toggleEdit,
  handleSave,
  ...props
}) => {
  const onSave = (value: string): void => {
    // here we can inject any part of chosen option
    // because we have an access to option as a second argument in onSave
    // const value = get(option, 'data-option.name', '');
    const row = { ...record, [dataIndex]: value };

    toggleEdit();
    handleSave(row);
  };

  return (
    <Select
      className={classes.select}
      onSelect={onSave}
      value={record[dataIndex]}
      // to set what to display as a chosen value (value/label)
      optionLabelProp="value"
      {...props}
    >
      {
        options.map((option: SelectOption): React.ReactNode => (
          <Select.Option
            key={option.id}
            value={option.name}
            // TODO: under question, maybe we can do it in more elegant way
            data-option={option}
          >
            {`${option.name}: ${option.born}`}
          </Select.Option>
        ))
      }
    </Select>
  );
};

export default SelectEditor;
