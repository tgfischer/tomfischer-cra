import React from "react";
import PropType from "prop-types";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";

import Page from "../Page";

const styles = theme => ({
  container: {
    padding: "24px"
  },
  paper: {
    marginTop: "15em",
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

const Home = ({ classes }) => (
  <Page background="/images/background.jpg">
    <Grid container>
      <Hidden xsDown>
        <Grid item xs />
      </Hidden>
      <Grid item xs={12} sm={10}>
        <Paper className={classes.paper} color="primary">
          <div className={classes.container}>
            <Grid container justify="center" spacing={24}>
              <Grid item xs={12}>
                <Typography
                  className={classnames(classes.inverse, classes.header)}
                  variant="display2"
                  align="center"
                >
                  Welcome!
                </Typography>
                <Typography
                  className={classnames(classes.inverse, classes.headline)}
                  variant="headline"
                  align="center"
                  color="inherit"
                >
                  I am a Software Engineer from Waterloo. Click the button below
                  to learn more about me
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/about"
                  variant="raised"
                  color="secondary"
                  size="large"
                >
                  About Myself
                </Button>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Grid>
      <Hidden xsDown>
        <Grid item xs />
      </Hidden>
    </Grid>
  </Page>
);

Home.propTypes = {
  classes: PropType.shape({
    container: PropType.string.isRequired,
    paper: PropType.string.isRequired,
    inverse: PropType.string.isRequired
  }).isRequired
};

export default withStyles(styles)(Home);
