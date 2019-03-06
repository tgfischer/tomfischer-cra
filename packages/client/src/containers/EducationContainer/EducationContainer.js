import React from "react";

import Education from "../../components/Education";
import { useEducation } from "./hooks";

const EducationContainer = () => {
  const [state] = useEducation();
  return <Education {...state} />;
};

export default EducationContainer;
