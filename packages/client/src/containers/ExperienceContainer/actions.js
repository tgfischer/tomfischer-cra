import { apiAction } from "../../actions";
import { backendEndpoint } from "../../constants";

export const fetchJobs = () => dispatch =>
  apiAction({
    type: "FETCH_JOBS",
    method: "GET",
    endpoint: `${backendEndpoint}/api/experience/jobs`
  })(dispatch);
