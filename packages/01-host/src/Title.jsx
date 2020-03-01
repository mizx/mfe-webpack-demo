import {
  AppBar,
  Toolbar,
  Typography,
  createStyles,
  makeStyles
} from "@material-ui/core";

import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      width: `calc(100% - 240px)`,
      marginLeft: 240
    }
  })
);

function Title({ title }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Title;
