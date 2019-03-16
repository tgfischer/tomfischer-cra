import React from "react";

import Education from "../../components/Education";
import { useEducation } from "./hooks";

const EducationContainer = () => {
  const [transcript, isFetching] = useEducation();
  return <Education transcript={transcript} isFetching={isFetching} />;
};

export default EducationContainer;
