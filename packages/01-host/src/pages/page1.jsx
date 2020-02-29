import React from "react";

const Dialog = React.lazy(() => import("app_mui/Dialog"));

const Page1 = () => (
  <div>
    <h1>Page 1</h1>
    <React.Suspense fallback="Loading Material UI Dialog...">
      <Dialog />
    </React.Suspense>
  </div>
);

export default Page1;
