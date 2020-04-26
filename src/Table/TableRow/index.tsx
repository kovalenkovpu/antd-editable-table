import React from "react";

import { EditableRowProps } from '../types';

// as an example, no need if only passes props below
export const EditableRow: React.FC<EditableRowProps> = props =>
  (
    <tr {...props} />
  );

export default EditableRow;
