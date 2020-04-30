import React from 'react';

import EditableTable from 'src/components/Table';
import { ConnectedUsersPageProps } from 'src/types/Users';
import { EDITORS } from './constants/editors';

const Users: React.FC<ConnectedUsersPageProps> = ({ columns, data, getTableData, updateTableData }) => {
  React.useEffect(() => {
    getTableData();
  }, [getTableData]);

  return (
    <EditableTable
      editable={true}
      data={data}
      columns={columns}
      editors={EDITORS}
      updateTableData={updateTableData}
    />
  );
};

export default Users;
