import React from 'react';

import { GenericCheckboxEditor } from 'src/components/Table/CellEditors';
import { EditorsProps } from 'src/types/Table';
import { DataItem } from 'src/types/Users';

export const CheckboxEditor: React.FC<
  EditorsProps<DataItem>
> = props => {
  return (
    <GenericCheckboxEditor {...props} />
  );
};

export default CheckboxEditor;
