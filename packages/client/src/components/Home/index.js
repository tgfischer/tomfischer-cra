import React, { Suspense, lazy } from "react";

import Loading from "../Loading";

const Home = lazy(() => import("./Home"));

export default props => (
  <Suspense fallback={<Loading />}>
    <Home {...props} />
  </Suspense>
);
