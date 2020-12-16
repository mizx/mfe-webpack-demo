import Button from "./Button";
import React from "react";
import { loadFromRemote } from "fm-loader";

const Page = React.lazy(
  loadFromRemote({
    remote: { url: "http://localhost:3001/remoteEntry.js", name: "app_01" },
    component: "Page",
  })
);

function App() {
  return (
    <React.Suspense fallback={null}>
      <Page title="Styled Components App">
        <Button>&#128133; Test Button</Button>
      </Page>
    </React.Suspense>
  );
}

export default App;
