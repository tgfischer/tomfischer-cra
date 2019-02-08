import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  root: {
    height: "100vh"
  }
};

const Loading = ({ classes }) => (
  <Grid container className={classes.root} justify="center" alignItems="center">
    <CircularProgress size={100} />
  </Grid>
);

export default withStyles(styles)(Loading);
