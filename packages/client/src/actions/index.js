import identity from "lodash/identity";

const throwError = (dispatch, err, type) => {
  dispatch({ type: `${type}_FAILURE`, err });
  throw err;
};

export const apiAction = ({
  type,
  method,
  body,
  endpoint,
  responseHandler = identity
}) => async dispatch => {
  dispatch({ type: `${type}_REQUEST` });

  try {
    const rawResponse = await (await fetch(endpoint, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: body ? JSON.stringify(body) : undefined,
      mode: "cors"
    })).json();
    if (rawResponse.err) {
      return throwError(dispatch, rawResponse.err, type);
    }
    const response = responseHandler(rawResponse);
    dispatch({ type: `${type}_SUCCESS`, response });
    return response;
  } catch (err) {
    throwError(dispatch, err, type);
  }
};
