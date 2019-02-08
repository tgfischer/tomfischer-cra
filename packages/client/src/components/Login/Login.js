import React from "react";
import PropType from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";

import Page from "../Page";
import LoginForm from "./LoginForm";

const styles = theme => ({
  container: {
    padding: "24px"
  },
  paper: {
    marginTop: "15em",
    backgroundColor: "#FFF",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "5em"
    }
  },
  inverse: {
    color: "white"
  },
  header: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.3em"
    }
  },
  headline: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em"
    }
  }
});

const Login = ({ classes, onValidSubmit }) => (
  <Page skinny>
    <Grid container>
      <Hidden xsDown>
        <Grid item xs />
      </Hidden>
      <Grid item xs={12} sm={9}>
        <Paper className={classes.paper} color="inherit">
          <div className={classes.container}>
            <LoginForm onValidSubmit={onValidSubmit} />
          </div>
        </Paper>
      </Grid>
      <Hidden xsDown>
        <Grid item xs />
      </Hidden>
    </Grid>
  </Page>
);

Login.propTypes = {
  classes: PropType.shape({
    container: PropType.string.isRequired,
    paper: PropType.string.isRequired
  }).isRequired
};

export default withStyles(styles)(Login);
