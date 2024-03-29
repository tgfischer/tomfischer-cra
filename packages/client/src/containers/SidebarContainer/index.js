import React, { Suspense, lazy } from "react";

import Loading from "../../components/Loading";

const SidebarContainer = lazy(() => import("./SidebarContainer"));

export default props => (
  <Suspense fallback={<Loading />}>
    <SidebarContainer {...props} />
  </Suspense>
);
