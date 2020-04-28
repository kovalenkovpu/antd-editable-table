import React from "react";

import { editorMapper } from '../CellEditors/editorMapper';
import { AdditionalCellProps, DataItem } from "../types";

export const EditableCell: React.FC<AdditionalCellProps<DataItem>> = ({
  editable,
  record,
  dataIndex,
  handleSave,
  children,
  ...restProps
}) => {
  const [editing, setEditing] = React.useState<boolean>(false);
  const toggleEdit = (): void => setEditing(!editing);

  let childNode = children;

  if (editable) {
    childNode = editing
      ? editorMapper({ record, dataIndex, toggleEdit, handleSave })
      : (
        <div onClick={toggleEdit}>
          {children}
        </div>
      );
  }

  return <td {...restProps}>{childNode}</td>;
};

export default EditableCell;
