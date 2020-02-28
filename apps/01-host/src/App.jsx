import React from "react";

const Dialog = React.lazy(() => import("mui-app/Dialog"));

function App() {
  return (
    <div>
      <h1>Hello World App</h1>
      <React.Suspense fallback={"Loading..."}>
        <span />
      </React.Suspense>
    </div>
  );
}

export default App;
