import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isFetching: true
      };
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return {
        isFetching: false
      };
    default:
      return state;
  }
};

export default reducer;
