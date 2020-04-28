import React from "react";
import Checkbox from "antd/lib/checkbox";

import classes from './Renderers.module.css';

const selectRenderer = (employed: boolean): React.ReactNode => (
  <Checkbox className={classes.editableCheckbox} checked={employed} />
);

export default selectRenderer;
