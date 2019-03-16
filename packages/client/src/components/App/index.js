import React, { Fragment } from "react";
import { Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";

import Home from "../Home";
import About from "../About";
import Education from "../../containers/EducationContainer";
import Experience from "../../containers/ExperienceContainer";

export default () => (
  <Fragment>
    <CssBaseline />
    <Router history={createBrowserHistory()}>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/experience" component={Experience} />
      </Fragment>
    </Router>
  </Fragment>
);
