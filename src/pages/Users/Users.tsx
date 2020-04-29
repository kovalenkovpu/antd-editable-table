import React from 'react';

import EditableTable from 'src/components/Table';
import { StateProps } from 'src/types/Users';
import { EDITORS } from './constants/editors';

const Users: React.FC<StateProps> = ({ columns, data }) => {
  return (
    <EditableTable data={data} columns={columns} editors={EDITORS}/>
  );
};

export default Users;
