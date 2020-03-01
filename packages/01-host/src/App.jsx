import { CssBaseline, createStyles, makeStyles } from "@material-ui/core";

import { HashRouter } from "react-router-dom";
import React from "react";
import Routes from "./Routes";
import SideNav from "./SideNav";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex"
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  })
);

function App() {
  const classes = useStyles();

  return (
    <HashRouter>
      <CssBaseline />
      <div className={classes.root}>
        <SideNav />
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <Routes />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
