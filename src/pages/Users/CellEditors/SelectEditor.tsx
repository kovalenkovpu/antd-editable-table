import React from 'react';

import { GenericSelectEditor } from 'src/components/Table/CellEditors';
import { EditorsProps } from 'src/types/Table';
import { DataItem } from 'src/types/Users';
import { options, SelectOption } from '../options';

const renderOption = (option: SelectOption) => (`${option.name}: ${option.born}`);

export const SelectEditor: React.FC<
  EditorsProps<DataItem, SelectOption>
> = props => {
  return (
    <GenericSelectEditor
      options={options}
      optionLabelProp="value"
      optionKey="id"
      optionValue="name"
      renderOption={renderOption}
      {...props}
    />
  );
};

export default SelectEditor;
