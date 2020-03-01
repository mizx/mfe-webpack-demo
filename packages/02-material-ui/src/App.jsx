import Dialog from "./Dialog";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

const Title = React.lazy(() => import("host_app/Title"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <React.Suspense fallback={null}>
          <Title title="Material UI App" />
        </React.Suspense>
        <Dialog />
      </div>
    </ThemeProvider>
  );
}

export default App;
