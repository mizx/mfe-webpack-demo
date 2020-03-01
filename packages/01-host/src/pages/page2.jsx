import Page from "../Page";
import React from "react";

const Button = React.lazy(() => import("app_sc/Button"));

const Page2 = () => (
  <Page title="UI Library Demo">
    <React.Suspense fallback="Loading Styled Component Button...">
      <Button>&#128133; Button</Button>
    </React.Suspense>
  </Page>
);

export default Page2;
