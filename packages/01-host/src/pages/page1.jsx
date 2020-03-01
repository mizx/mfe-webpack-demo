import Content from "../Content";
import Page from "../Page";
import React from "react";
import Title from "../Title";

const Dialog = React.lazy(() => import("app_mui/Dialog"));

const Page1 = () => (
  <Page>
    <Title title="Dialog Demo" />
    <Content>
      <React.Suspense fallback="Loading Material UI Dialog...">
        <Dialog />
      </React.Suspense>
    </Content>
  </Page>
);

export default Page1;
