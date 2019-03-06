import React, { Suspense, lazy } from "react";

import Loading from "../Loading";

const About = lazy(() => import("./About"));

export default props => (
  <Suspense fallback={<Loading />}>
    <About {...props} />
  </Suspense>
);
