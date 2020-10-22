import { Divider, ThemeProvider, Typography } from "@material-ui/core";

import Dialog from "./Dialog";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Tabs from "./Tabs";
import { theme } from "./theme";
import { loadFromRemote } from 'fm-loader';

const Page = React.lazy(loadFromRemote({
  remote: {
    url: 'http://localhost:3001/remoteEntry.js',
    name: 'app_01',
  },
  component: 'Page',
}));

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={null}>
          <Page title="Material UI App">
            <Typography variant="h6">Dialog Component</Typography>
            <Dialog />
            <Divider style={{ margin: "16px 0" }} />
            <Typography variant="h6">Tabs Component</Typography>
            <Tabs />
          </Page>
        </React.Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
