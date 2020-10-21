import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import DialogMarkdown from "../docs/Dialog.md";
import Markdown from "markdown-to-jsx";
import Page from "../Page";
import React from "react";
import { loadComponent } from "../helpers/load-component";

const Dialog = React.lazy(loadComponent({ remote: { url: 'http://localhost:3002/remoteEntry.js', name: 'app_02' }, component: 'Dialog' }));

const DialogPage = () => (
  <Page title="Dialog Demo">
    <Markdown>{DialogMarkdown}</Markdown>
    <React.Suspense fallback="Loading Dialog...">
      <Dialog />
    </React.Suspense>
  </Page>
);

export default DialogPage;
