import React from 'react';
import Select from 'antd/lib/select';
import get from 'lodash/get';

import { GenericSelectorEditorsProps } from 'src/types/Table';
import classes from './SelectEditor.module.css';

export const GenericSelectEditor = <D, O>(props: GenericSelectorEditorsProps<D, O>) => {
  const {
    dataIndex,
    record,
    toggleEdit,
    handleSave,
    // comes from entity-specific editor
    options,
    optionLabelProp,
    optionKey,
    optionValue,
    renderOption,
    // rest of table built-in props
    ...restProps
  } = props;
  const editorRef = React.useRef<Select<string>>(null);
  const onSave = (value: string): void => {
    // here we can inject any part of chosen option
    // because we have an access to option as a second argument in onSave
    // const value = get(option, 'data-option.name', '');
    const row = { ...record, [dataIndex]: value };

    toggleEdit();
    handleSave(row);
  };

  React.useEffect(() => {
    editorRef.current?.focus();
  }, []);

  return (
    <Select
      className={classes.select}
      onSelect={onSave}
      value={String(record[dataIndex])}
      // to set what to display as a chosen value (value/label)
      optionLabelProp={optionLabelProp}
      ref={editorRef}
      {...restProps}
    >
      {
        options.map((option: O) => (
          <Select.Option
            // key={option[optionKey]}
            // value={option[optionValue]}
            key={get(option, optionKey, '')}
            value={get(option, optionValue, '')}
            // under question, maybe we can do it in more elegant way
            data-option={option}
          >
            {renderOption(option)}
          </Select.Option>
        ))
      }
    </Select>
  );
};
