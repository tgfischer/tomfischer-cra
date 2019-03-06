import React, { Suspense, lazy } from "react";

import Loading from "../Loading";

const ScrollTopButton = lazy(() => import("./ScrollTopButton"));

export default props => (
  <Suspense fallback={<Loading />}>
    <ScrollTopButton {...props} />
  </Suspense>
);
