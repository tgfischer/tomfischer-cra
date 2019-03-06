import { useReducer, useEffect } from "react";

import { fetchJobs } from "./actions";
import reducer, { initialState } from "./reducer";

export const useExperience = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetchJobs(dispatch);
  }, []);

  return [state];
};
