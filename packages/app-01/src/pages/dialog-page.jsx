import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import DialogMarkdown from "../docs/Dialog.md";
import Markdown from "markdown-to-jsx";
import Page from "../Page";
import React, { useMemo } from "react";
import { loadRemote } from "fm-loader";

// const Dialog = React.lazy(loadFromRemote({ remote: { url: 'http://localhost:3002/remoteEntry.js', name: 'app_02' }, component: 'Dialog' }));

const DialogPage = () => {
  const DialogWrapper = useMemo(() => React.lazy(async () => {
    const { Dialog } = await loadRemote('app_02@http://localhost:3002/remoteEntry.js');
    return Dialog;
  }));
  
  return <Page title="Dialog Demo">
    <Markdown>{DialogMarkdown}</Markdown>
    <React.Suspense fallback="Loading Dialog...">
      <DialogWrapper />
    </React.Suspense>
  </Page>;
};

export default DialogPage;
