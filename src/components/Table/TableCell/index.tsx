import React from 'react';

import { AdditionalCellProps } from 'src/types/Table';
import { editorMapper } from '../CellEditors/editorMapper';

export const EditableCell = <D, O>(props: AdditionalCellProps<D>) => {
  const {
    editable,
    record,
    dataIndex,
    handleSave,
    children,
    editors,
    ...restProps
  } = props;
  const [editing, setEditing] = React.useState<boolean>(false);
  const toggleEdit = (): void => setEditing(!editing);

  let childNode = children;

  if (editable) {
    childNode = editing
      ? editorMapper<D, O>({ record, dataIndex, toggleEdit, handleSave, editors })
      : (
        <div onClick={toggleEdit}>
          {children}
        </div>
      );
  }

  return <td {...restProps}>{childNode}</td>;
};

export default EditableCell;
