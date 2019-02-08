import {
  FETCH_TRANSCRIPT_REQUEST,
  FETCH_TRANSCRIPT_SUCCESS,
  FETCH_TRANSCRIPT_FAILURE
} from "./constants";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSCRIPT_REQUEST:
      return {
        isFetching: true
      };
    case FETCH_TRANSCRIPT_SUCCESS:
      return {
        isFetching: false,
        transcript: action.response.transcript
      };
    case FETCH_TRANSCRIPT_FAILURE:
      return {
        isFetching: false
      };
    default:
      return state;
  }
};

export default reducer;
