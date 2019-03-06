import React from "react";

import Experience from "../../components/Experience";
import { useExperience } from "./hooks";

const ExperienceContainer = () => {
  const [state] = useExperience();
  return <Experience {...state} />;
};

export default ExperienceContainer;
