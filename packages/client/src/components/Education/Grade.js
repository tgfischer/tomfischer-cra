import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

const styles = {
  progress: {
    marginBottom: "1em"
  }
};

const Grade = ({ classes, name, code, mark }) => (
  <Fragment>
    <Typography variant="title">{name}</Typography>
    <Typography variant="subheading">{code}</Typography>
    <Typography variant="subheading">{`Mark: ${mark}%`}</Typography>
    <LinearProgress
      className={classes.progress}
      variant="determinate"
      value={mark}
      color="secondary"
    />
  </Fragment>
);

Grade.propTypes = {
  classes: PropTypes.shape({
    progress: PropTypes.string.isRequired
  }).isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  mark: PropTypes.number.isRequired
};

export default withStyles(styles)(Grade);
