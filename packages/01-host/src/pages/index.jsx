import Page from "../Page";
import React from "react";
import { Typography } from "@material-ui/core";

const IndexPage = () => (
  <Page title="Module Federation Demo">
    <Typography variant="body1">
      Welcome to the Module Federation Demo!
    </Typography>
    <Typography variant="body2">
      Click any of the items on the left to get started.
    </Typography>
  </Page>
);

export default IndexPage;
