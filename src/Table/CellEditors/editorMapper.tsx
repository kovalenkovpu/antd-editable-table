import React from "react";

import SelectEditor from "./SelectEditor";
import InputEditor from "./InputEditor";
import CheckboxEditor from "./CheckboxEditor";
import { Editors, EditorsProps } from "../types";

const EDITORS: Editors = {
  name: SelectEditor,
  salary: InputEditor,
  employed: CheckboxEditor,
};

export const editorMapper = (props: EditorsProps): React.ReactNode => {
  const Component = EDITORS[props.dataIndex];

  if (!Component) {
    return null;
  }

  return (
    <Component {...props} />
  );
};
