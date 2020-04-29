import React from 'react';

import { EditorsProps } from 'src/types/Table';

export const editorMapper = <D, O>(props: EditorsProps<D, O>): JSX.Element | null => {
  const Component = props.editors[props.dataIndex];

  if (!Component) {
    return null;
  }

  return (
    // @ts-ignore
    <Component {...props} />
  );
};
