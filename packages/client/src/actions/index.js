import identity from "lodash/identity";
import defaults from "lodash/defaults";

export const apiAction = (method, endpoint, types, args) => async dispatch => {
  const options = defaults(args, {
    onSuccess: identity
  });
  const [request, success, failure] = types;

  try {
    dispatch({ type: request });
    const rawResponse = await fetch(endpoint, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      mode: "cors"
    });
    const json = await rawResponse.json();

    if (json.err) {
      dispatch({ type: failure, err: json.err });
      throw json.err;
    }

    const response = options.onSuccess(json);
    dispatch({ type: success, response });
    return response;
  } catch (err) {
    dispatch({ type: failure, err });
    throw err;
  }
};
