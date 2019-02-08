import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "./constants";

const initialState = {
  isOpen: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        isOpen: true
      };
    case CLOSE_SIDEBAR:
      return {
        isOpen: false
      };
    default:
      return state;
  }
};

export default reducer;
