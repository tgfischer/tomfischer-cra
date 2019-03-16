import { useEffect } from "react";
import { useResource } from "react-request-hook";
import get from "lodash/get";

import { backendEndpoint } from "../../constants";

export const useEducation = () => {
  const [{ data, isLoading }, getTranscript] = useResource(() => ({
    method: "GET",
    url: `${backendEndpoint}/api/education/transcript`
  }));

  useEffect(() => void getTranscript(), []);
  const transcript = get(data, "transcript") || [];
  return [transcript, isLoading];
};
