import Markdown from "markdown-to-jsx";
import Page from "../Page";
import React from "react";
import Tabs from "../docs/Tabs.md";

const RoutedTabs = React.lazy(() => import("bravo_app/Tabs"));

const RoutingPage = () => (
  <Page title="Routing Demo">
    <Markdown>{Tabs}</Markdown>
    <React.Suspense fallback="Loading Tabs...">
      <RoutedTabs />
    </React.Suspense>
  </Page>
);

export default RoutingPage;
