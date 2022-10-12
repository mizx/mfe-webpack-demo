import Markdown from "markdown-to-jsx";
import Page from "../Page";
import React from "react";
import Tabs from "../docs/Tabs.md";
import { loadFromRemote } from "fm-loader";

const RoutedTabs = React.lazy(loadFromRemote({ remote: { url: 'http://localhost:3002/remoteEntry.js', name: 'app_02' }, component: "Tabs" }));

const RoutingPage = () => (
  <Page title="Routing Demo">
    <Markdown>{Tabs}</Markdown>
    <React.Suspense fallback="Loading Tabs...">
      <RoutedTabs />
    </React.Suspense>
  </Page>
);

export default RoutingPage;
