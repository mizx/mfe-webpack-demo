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

import { loadFromRemote } from 'fm-loader';

const Button = React.lazy(loadFromRemote({
  remote: {
    url: 'http://localhost:3003/remoteEntry.js',
    name: 'app_03',
  },
  component: 'Button',
}));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const combinePath = (...pathsParts) => {
  return '/' + pathsParts.map(p => p.replace(/^\//, '').replace(/\/$/, '')).filter(e => !!e).join('/');
};

export default function TabsComponent() {
  const classes = useStyles();
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const { path: rootPath } = match;

  const handleChange = (event, newValue) => {
    history.push(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={location.pathname} onChange={handleChange}>
          <Tab label="Foo" value={combinePath(rootPath, `foo`)} />
          <Tab label="Bar" value={combinePath(rootPath, `bar`)} />
        </Tabs>
      </AppBar>
      <Switch>
        <Route path={rootPath} exact={true}>
          <Redirect to={combinePath(rootPath, `foo`)} />
        </Route>
        <Route path={combinePath(rootPath, `foo`)}>
          <Typography component="div">
            <Box p={3}>Foo Content</Box>
          </Typography>
        </Route>
        <Route path={combinePath(rootPath, `bar`)}>
          <Typography component="div">
            <Box p={3}>
              Bar Content
              <React.Suspense fallback={null}>
                <Button>Bar Button</Button>
              </React.Suspense>
            </Box>
          </Typography>
        </Route>
      </Switch>
    </div>
  );
}
