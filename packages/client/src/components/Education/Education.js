import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Page from "../Page";
import Grades from "./Grades";

const Education = ({ transcript, isFetching }) => (
  <Page isLoading={isFetching} headline="Education" skinny>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography variant="title">Western University</Typography>
        <Typography variant="body2">Bachelor of Engineering Science</Typography>
        <Typography variant="body1">Software Engineering</Typography>
        <Typography variant="caption">Graduated with honours</Typography>
      </Grid>
      {transcript.map(({ title, courses }) => (
        <Grid item key={title} xs={12}>
          <Grades title={title} courses={courses} />
        </Grid>
      ))}
    </Grid>
  </Page>
);

Education.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  transcript: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      courses: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          code: PropTypes.string.isRequired,
          mark: PropTypes.number.isRequired,
          weight: PropTypes.number.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  )
};

Education.defaultProps = {
  transcript: []
};

export default Education;
