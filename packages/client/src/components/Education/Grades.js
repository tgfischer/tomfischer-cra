import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Grade from "./Grade";

const styles = {
  root: {
    backgroundColor: "white"
  },
  container: {
    padding: "24px"
  },
  subheading: {
    marginBottom: "1em"
  }
};

const Grades = ({ title, classes, courses }) => (
  <Paper className={classes.root} elevation={5}>
    <div className={classes.container}>
      <Typography variant="display1">{title}</Typography>
      <Typography variant="subheading" className={classes.subheading}>
        {`Overall average: ${(
          courses.reduce((sum, { mark, weight }) => sum + mark * weight, 0) /
          courses.reduce((sum, { weight }) => sum + weight, 0)
        ).toFixed(1)}%`}
      </Typography>
      {courses.map(({ mark, name, code }) => (
        <Grade key={code} name={name} code={code} mark={mark} />
      ))}
    </div>
  </Paper>
);

Grades.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired
  }).isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      mark: PropTypes.number.isRequired,
      weight: PropTypes.number.isRequired
    })
  ).isRequired
};

export default withStyles(styles)(Grades);
