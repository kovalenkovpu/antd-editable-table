import React from "react";
import Select from "antd/lib/select";

import classes from './SelectEditor.module.css';

const SelectEditor = ({ options, inputRef, onSelect, value, ...props }) =>
  (
    <Select
      className={classes.select}
      ref={inputRef}
      onSelect={onSelect}
      value={value}
      // to set what to display as a chosen value (value/label)
      optionLabelProp="value"
      {...props}
    >
      {
        options.map(option => (
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
