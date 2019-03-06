import React, { Suspense, lazy } from "react";

import Loading from "../../components/Loading";

const EducationContainer = lazy(() => import("./EducationContainer"));

export default props => (
  <Suspense fallback={<Loading />}>
    <EducationContainer {...props} />
  </Suspense>
);
