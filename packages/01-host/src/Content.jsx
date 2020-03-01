import { createStyles, makeStyles } from "@material-ui/core";

import React from "react";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  })
);

function Content({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}

export default Content;
