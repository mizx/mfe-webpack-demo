import { Route, Switch } from "react-router-dom";

import IndexPage from "./pages/index";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import React from "react";

const Routes = () => (
  <Switch>
    <Route path="/" exact={true}>
      <IndexPage />
    </Route>
    <Route path="/page1">
      <Page1 />
    </Route>
    <Route path="/page2">
      <Page2 />
    </Route>
  </Switch>
);

export default Routes;
