import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Typography,
  makeStyles
} from "@material-ui/core";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch
} from "react-router-dom";

import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function TabsComponent() {
  const classes = useStyles();
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const handleChange = (event, newValue) => {
    history.push(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={location.pathname} onChange={handleChange}>
          <Tab label="Foo" value={`${match.path}foo`} />
          <Tab label="Bar" value={`${match.path}bar`} />
        </Tabs>
      </AppBar>
      <Switch>
        <Route path={match.path} exact={true}>
          <Redirect to={`${match.path}foo`} />
        </Route>
        <Route path={`${match.path}foo`}>
          <Typography component="div">
            <Box p={3}>Foo Content</Box>
          </Typography>
        </Route>
        <Route path={`${match.path}bar`}>
          <Typography component="div">
            <Box p={3}>Bar Content</Box>
          </Typography>
        </Route>
      </Switch>
    </div>
  );
}
