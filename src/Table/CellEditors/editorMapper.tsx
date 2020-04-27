import React from "react";

import SelectEditor from "./SelectEditor";
import InputEditor from "./InputEditor";
import { Editors, EditorsProps } from "../types";

const EDITORS: Editors = {
  name: SelectEditor,
  salary: InputEditor,
};

export const editorMapper = (props: EditorsProps): React.ReactNode => {
  const Editor: React.ElementType = EDITORS[props.dataIndex];

  return (
    <Editor {...props} />
  );
};
