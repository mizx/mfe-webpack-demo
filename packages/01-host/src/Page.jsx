import { createStyles, makeStyles } from "@material-ui/core";

import React from "react";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flex: 1
    }
  })
);

function Page({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}

export default Page;
