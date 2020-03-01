import {
  AppBar,
  Toolbar,
  Typography,
  createStyles,
  makeStyles
} from "@material-ui/core";

import React from "react";

function Title({ title }) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Title;
