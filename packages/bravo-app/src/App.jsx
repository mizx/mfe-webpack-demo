import Dialog from "./Dialog";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

const Page = React.lazy(() => import("alpha_app/Page"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={null}>
        <Page title="Material UI App">
          <Dialog />
        </Page>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
