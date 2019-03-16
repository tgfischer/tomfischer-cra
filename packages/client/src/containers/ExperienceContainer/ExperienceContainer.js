import React from "react";

import Experience from "../../components/Experience";
import { useExperience } from "./hooks";

const ExperienceContainer = () => {
  const [jobs, isFetching] = useExperience();
  return <Experience jobs={jobs} isFetching={isFetching} />;
};

export default ExperienceContainer;
