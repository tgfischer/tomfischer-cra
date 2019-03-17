import React, { Fragment } from "react";
import { Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";

import Home from "../Home";
import Education from "../../containers/EducationContainer";
import ProjectsContainer from "../../containers/ProjectsContainer";
import Experience from "../../containers/ExperienceContainer";

export default () => (
  <Fragment>
    <CssBaseline />
    <Router history={createBrowserHistory()}>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/projects" component={ProjectsContainer} />
        <Route exact path="/experience" component={Experience} />
      </Fragment>
    </Router>
  </Fragment>
);
