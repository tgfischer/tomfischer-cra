import { useReducer, useEffect } from "react";

import { fetchTranscript } from "./actions";
import reducer, { initialState } from "./reducer";

export const useEducation = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetchTranscript(dispatch);
  }, []);

  return [state];
};
