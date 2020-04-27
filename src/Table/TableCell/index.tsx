import React from "react";

import { AdditionalCellProps, DataItem } from "../types";
import { editorMapper } from '../CellEditors/editorMapper';

export const EditableCell: React.FC<AdditionalCellProps<DataItem>> = ({
  editable,
  record,
  dataIndex,
  handleSave,
  children,
  ...restProps
}) => {
  // const selectRef = useRef<HTMLSelectElement>(null);
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
