import omit from "lodash/omit";

import { apiAction } from "../../actions";
import { userServiceEndpoint } from "../../constants";
import { history } from "../../containers/AppContainer";

export const login = ({ email, password }) => (dispatch, getState) =>
  apiAction({
    type: "LOGIN",
    method: "POST",
    body: { email, password },
    endpoint: `${userServiceEndpoint}/api/login`,
    responseHandler: response => {
      localStorage.setItem("id_token", response.idToken);
      history.push("/");
      return omit(response, "idToken");
    }
  })(dispatch);
