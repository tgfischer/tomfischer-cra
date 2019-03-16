import { useEffect } from "react";
import { useResource } from "react-request-hook";
import get from "lodash/get";

import { backendEndpoint } from "../../constants";

export const useExperience = () => {
  const [{ data, isLoading }, getExperience] = useResource(() => ({
    method: "GET",
    url: `${backendEndpoint}/api/experience/jobs`
  }));
  useEffect(() => void getExperience(), []);
  const jobs = get(data, "jobs") || [];
  return [jobs, isLoading];
};
