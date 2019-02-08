import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    padding: "2em 0 1em",
    color: "white",
    marginBottom: "2em"
  },
  container: {
    padding: "0 1em"
  }
};

const Header = ({ classes, skinny, text }) => (
  <Paper className={classes.root} square>
    <Grid className={classes.container} container>
      <Grid item xs sm />
      <Grid item xs={12} sm={12} md={skinny ? 6 : 8}>
        <Typography variant="display2" color="inherit">
          {text}
        </Typography>
      </Grid>
      <Grid item xs sm />
    </Grid>
  </Paper>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
  skinny: PropTypes.bool,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired
  }).isRequired
};

Header.defaultProps = {
  skinny: false
};

export default withStyles(styles)(Header);
