import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import Page from "../Page";
import Job from "./Job";

const Experience = ({ isFetching, jobs }) => (
  <Page isLoading={isFetching} headline="Work Experience" skinny>
    <Grid container spacing={24}>
      {jobs.map(job => (
        <Grid key={job.id} item xs={12}>
          <Job job={job} />
        </Grid>
      ))}
    </Grid>
  </Page>
);

Experience.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      company: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      details: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired
  )
};

Experience.defaultProps = {
  jobs: []
};

export default Experience;
