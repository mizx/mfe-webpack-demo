import Content from "../Content";
import Page from "../Page";
import React from "react";
import Title from "../Title";

const Button = React.lazy(() => import("app_sc/Button"));

const Page2 = () => (
  <Page>
    <Title title="UI Library Demo" />
    <Content>
      <React.Suspense fallback="Loading Styled Component Button...">
        <Button>&#128133; Button</Button>
      </React.Suspense>
    </Content>
  </Page>
);

export default Page2;
