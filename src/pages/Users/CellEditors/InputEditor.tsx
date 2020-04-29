import React from 'react';

import { GenericInputEditor } from 'src/components/Table/CellEditors';
import { EditorsProps } from 'src/types/Table';
import { DataItem } from 'src/types/Users';

export const InputEditor: React.FC<
  EditorsProps<DataItem>
> = props => {
  return (
    <GenericInputEditor {...props} />
  );
};

export default InputEditor;
