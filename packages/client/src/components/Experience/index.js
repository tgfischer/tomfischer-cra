import React, { Suspense, lazy } from "react";

import Loading from "../Loading";

const Experience = lazy(() => import("./Experience"));

export default props => (
  <Suspense fallback={<Loading />}>
    <Experience {...props} />
  </Suspense>
);
