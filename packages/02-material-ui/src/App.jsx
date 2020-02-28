import Dialog from "./Dialog";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Material UI App</h1>
        <Dialog />
      </div>
    </ThemeProvider>
  );
}

export default App;
