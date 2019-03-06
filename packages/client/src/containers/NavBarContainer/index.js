import React, { Suspense, lazy } from "react";

import Loading from "../../components/Loading";

const NavBarContainer = lazy(() => import("./NavBarContainer"));

export default props => (
  <Suspense fallback={<Loading />}>
    <NavBarContainer {...props} />
  </Suspense>
);
