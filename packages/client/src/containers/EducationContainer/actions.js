import { apiAction } from "../../actions";
import { backendEndpoint } from "../../constants";

export const fetchTranscript = () => dispatch =>
  apiAction({
    type: "FETCH_TRANSCRIPT",
    method: "GET",
    endpoint: `${backendEndpoint}/api/education/transcript`
  })(dispatch);
