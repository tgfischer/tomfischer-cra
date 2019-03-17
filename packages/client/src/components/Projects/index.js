import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import moment from "moment";

import Page from "../Page";
import Project from "./Project";

const Projects = ({ projects, isFetching }) => (
  <Page isLoading={isFetching} headline="Projects" skinny>
    <Grid container spacing={24}>
      {projects
        .sort((a, b) => {
          if (!a.endDate) {
            return -1;
          } else if (!b.endDate) {
            return 1;
          } else {
            return moment.utc(a.endDate).diff(moment.utc(b.endDate));
          }
        })
        .map(project => (
          <Grid key={project.id} item xs={12}>
            <Project project={project} />
          </Grid>
        ))}
    </Grid>
  </Page>
);

Projects.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  )
};

Projects.defaultProps = {
  projects: []
};

export default Projects;
