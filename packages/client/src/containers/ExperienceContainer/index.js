import React, { Suspense, lazy } from "react";

import Loading from "../../components/Loading";

const ExperienceContainer = lazy(() => import("./ExperienceContainer"));

export default props => (
  <Suspense fallback={<Loading />}>
    <ExperienceContainer {...props} />
  </Suspense>
);
