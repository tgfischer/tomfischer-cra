import React, { Suspense, lazy } from "react";

import Loading from "../Loading";

const Page = lazy(() => import("./Page"));

export default props => (
  <Suspense fallback={<Loading />}>
    <Page {...props} />
  </Suspense>
);
