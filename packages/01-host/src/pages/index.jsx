import React from "react";
import Title from "../Title";
import { Typography } from "@material-ui/core";

const IndexPage = () => (
  <div>
    <Title title="Module Federation: Welcome!" />
    <Typography variant="body1">
      Welcome to the Module Federation Demo!
    </Typography>
    <Typography variant="body2">
      Click any of the items on the left to get started.
    </Typography>
  </div>
);

export default IndexPage;
