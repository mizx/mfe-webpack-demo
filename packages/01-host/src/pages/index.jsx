import Content from "../Content";
import Page from "../Page";
import React from "react";
import Title from "../Title";
import { Typography } from "@material-ui/core";

const IndexPage = () => (
  <Page>
    <Title title="Module Federation: Welcome!" />
    <Content>
      <Typography variant="body1">
        Welcome to the Module Federation Demo!
      </Typography>
      <Typography variant="body2">
        Click any of the items on the left to get started.
      </Typography>
    </Content>
  </Page>
);

export default IndexPage;
