import { apiAction } from "../../actions";
import { backendEndpoint } from "../../constants";
import * as constants from "./constants";

export const fetchJobs = dispatch =>
  apiAction("GET", `${backendEndpoint}/api/experience/jobs`, [
    constants.FETCH_JOBS_REQUEST,
    constants.FETCH_JOBS_SUCCESS,
    constants.FETCH_JOBS_FAILURE
  ])(dispatch);
