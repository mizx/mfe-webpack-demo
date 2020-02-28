import React from "react";

const Dialog = React.lazy(() => import("app_mui/Dialog"));
const Button = React.lazy(() => import("app_sc/Button"));

function App() {
  return (
    <div>
      <h1>Host App</h1>
      <React.Suspense fallback="Loading Material UI Dialog...">
        <Dialog />
      </React.Suspense>
      <React.Suspense fallback="Loading Styled Component Button...">
        <Button>Pretty Button</Button>
      </React.Suspense>
    </div>
  );
}

export default App;
