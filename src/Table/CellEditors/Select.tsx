import React from "react";
import Select from "antd/lib/select";

import classes from './SelectEditor.module.css';
import { SelectOption, SelectEditorProps } from '../types';

const SelectEditor: React.FC<SelectEditorProps> = ({ options, onSelect, value, ...props }) =>
  (
    <Select
      className={classes.select}
      // ref={selectRef}
      onSelect={onSelect}
      value={value}
      // to set what to display as a chosen value (value/label)
      optionLabelProp="value"
      {...props}
    >
      {
        options.map((option: SelectOption): React.ReactNode => (
          <Select.Option
            key={option.id}
            value={option.name}
            // under question, maybe we can do it in more elegant way
            // needed to pass to higher level the whole chosen option object
            data-option={option}
          >
            {`${option.name}: ${option.born}`}
          </Select.Option>
        ))
      }
    </Select>
  );

export default SelectEditor;
