import React from "react";

const Dialog = React.lazy(() => import("mui_app/Dialog"));

function App() {
  return (
    <div>
      <h1>Hello World App</h1>
      <React.Suspense fallback={"Loading..."}>
        <Dialog />
      </React.Suspense>
    </div>
  );
}

export default App;
