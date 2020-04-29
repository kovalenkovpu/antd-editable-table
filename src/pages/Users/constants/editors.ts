import { Editors } from 'src/types/Table';
import { DataItem } from 'src/types/Users';
import SelectEditor from '../CellEditors/SelectEditor';
import CheckboxEditor from '../CellEditors/CheckboxEditor';
import InputEditor from '../CellEditors/InputEditor';

export const EDITORS: Editors<DataItem> = {
  name: SelectEditor,
  salary: InputEditor,
  employed: CheckboxEditor,
};
