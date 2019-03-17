import React, { Suspense, lazy } from "react";

import Loading from "../../components/Loading";

const ProjectsContainer = lazy(() => import("./ProjectsContainer"));

export default props => (
  <Suspense fallback={<Loading />}>
    <ProjectsContainer {...props} />
  </Suspense>
);
