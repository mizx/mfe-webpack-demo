import Page from "../Page";
import React from "react";

const Tabs = React.lazy(() => import("bravo_app/Tabs"));

const RoutingPage = () => (
  <Page title="Routing Demo">
    <React.Suspense fallback="Loading Tabs...">
      <Tabs />
    </React.Suspense>
  </Page>
);

export default RoutingPage;
