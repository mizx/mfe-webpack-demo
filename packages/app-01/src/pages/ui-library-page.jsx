import Markdown from "markdown-to-jsx";
import Page from "../Page";
import React from "react";
import UiLibraryMd from "../docs/UiLibrary.md";
import { loadFromRemote } from "fm-loader";

const Button = React.lazy(loadFromRemote({ remote: { url: 'http://localhost:3003/remoteEntry.js', name: 'app_03' }, component: 'Button' }));

const UiLibraryPage = () => (
  <Page title="UI Library Demo">
    <Markdown>{UiLibraryMd}</Markdown>
    <React.Suspense fallback="Loading Styled Button...">
      <Button>&#128133; Button</Button>
    </React.Suspense>
  </Page>
);

export default UiLibraryPage;
