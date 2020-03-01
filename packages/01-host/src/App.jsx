import { createStyles, makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { HashRouter } from "react-router-dom";
import React from "react";
import Routes from "./Routes";
import SideNav from "./SideNav";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
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
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Module Federation
            </Typography>
          </Toolbar>
        </AppBar>
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
