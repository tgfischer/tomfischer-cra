import { combineReducers } from "redux";

import education from "../EducationContainer/reducers";
import experience from "../ExperienceContainer/reducers";
import sidebar from "../SidebarContainer/reducers";

export default combineReducers({
  education,
  experience,
  sidebar
});
