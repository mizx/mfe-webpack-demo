import Page from "../Page";
import React from "react";

const Dialog = React.lazy(() => import("app_mui/Dialog"));

const Page1 = () => (
  <Page title="Dialog Demo">
    <React.Suspense fallback="Loading Material UI Dialog...">
      <Dialog />
    </React.Suspense>
  </Page>
);

export default Page1;
