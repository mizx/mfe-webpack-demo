import React from "react";
import Title from "../Title";

const Dialog = React.lazy(() => import("app_mui/Dialog"));

const Page1 = () => (
  <div>
    <Title title="Dialog Demo" />
    <React.Suspense fallback="Loading Material UI Dialog...">
      <Dialog />
    </React.Suspense>
  </div>
);

export default Page1;
