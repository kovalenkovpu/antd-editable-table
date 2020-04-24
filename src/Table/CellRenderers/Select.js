import React from "react";
import Select from "antd/lib/select";

import classes from './SelectRenderer.module.css';

const selectRenderer = name => <Select className={classes.editableSelect} value={name} />;

export default selectRenderer;
