import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = {
  section: {
    padding: "0.5em 0em",
    backgroundColor: "white"
  }
};

const Section = ({ classes, children }) => (
  <Paper className={classes.section} elevation={0}>
    {children}
  </Paper>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    section: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(Section);
