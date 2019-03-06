import { apiAction } from "../../actions";
import { backendEndpoint } from "../../constants";
import * as constants from "./constants";

export const fetchTranscript = dispatch =>
  apiAction("GET", `${backendEndpoint}/api/education/transcript`, [
    constants.FETCH_TRANSCRIPT_REQUEST,
    constants.FETCH_TRANSCRIPT_SUCCESS,
    constants.FETCH_TRANSCRIPT_FAILURE
  ])(dispatch);
