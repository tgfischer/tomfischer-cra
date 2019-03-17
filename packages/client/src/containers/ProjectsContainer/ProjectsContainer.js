import React from "react";

import Projects from "../../components/Projects";
import { useProjects } from "./hooks";

const ProjectsContainer = () => {
  const [projects, isFetching] = useProjects();
  return <Projects projects={projects} isFetching={isFetching} />;
};

export default ProjectsContainer;
