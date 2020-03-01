import { Route, Switch } from "react-router-dom";

import IndexPage from "./pages/index";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import React from "react";

const Routes = () => (
  <Switch>
    <Route path="/" exact={true}>
      <IndexPage />
    </Route>
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
    <Route path="/page3" component={Page3} />
  </Switch>
);

export default Routes;
