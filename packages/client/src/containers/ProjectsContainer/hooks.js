import { useEffect } from "react";
import { useResource } from "react-request-hook";
import get from "lodash/get";

import { backendEndpoint } from "../../constants";

export const useProjects = () => {
  const [{ data, isLoading }, getProjects] = useResource(() => ({
    method: "GET",
    url: `${backendEndpoint}/api/projects`
  }));
  useEffect(() => void getProjects(), []);
  const projects = get(data, "projects") || [];
  return [projects, isLoading];
};
