import React from "react";

const Button = React.lazy(() => import("app_sc/Button"));

const Page2 = () => (
  <div>
    <h1>Page 2</h1>
    <React.Suspense fallback="Loading Styled Component Button...">
      <Button>&#128133; Button</Button>
    </React.Suspense>
  </div>
);

export default Page2;
