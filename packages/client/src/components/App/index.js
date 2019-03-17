import React, { Fragment } from "react";
import { Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";

import Home from "../Home";
import Experience from "../../containers/ExperienceContainer";
import Projects from "../../containers/ProjectsContainer";
import Education from "../../containers/EducationContainer";

export default () => (
  <Fragment>
    <CssBaseline />
    <Router history={createBrowserHistory()}>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/education" component={Education} />
      </Fragment>
    </Router>
  </Fragment>
);
