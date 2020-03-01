import React from "react";
import Title from "../Title";

const Button = React.lazy(() => import("app_sc/Button"));

const Page2 = () => (
  <div>
    <Title title="UI Library Demo" />
    <React.Suspense fallback="Loading Styled Component Button...">
      <Button>&#128133; Button</Button>
    </React.Suspense>
  </div>
);

export default Page2;
