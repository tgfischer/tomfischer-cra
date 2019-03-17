import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import * as constants from "../../constants";

const styles = {
  flex: {
    flex: 1
  },
  menuButton: {
    marginRight: "20px"
  }
};

const NavBar = ({ classes, openSidebar, title }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Grid container spacing={16} alignItems="center">
        <Hidden smDown>
          <Grid item sm />
        </Hidden>
        <Grid item sm={12} md={8}>
          <Grid container alignItems="center">
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={openSidebar}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography className={classes.flex} variant="h6" color="inherit">
              {title}
            </Typography>
            <Hidden smDown>
              {constants.pages.map(({ path, name }) =>
                path.startsWith("https://") ? (
                  <Button
                    key={path}
                    component="a"
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    {name}
                  </Button>
                ) : (
                  <Button key={path} component={Link} to={path} color="inherit">
                    {name}
                  </Button>
                )
              )}
            </Hidden>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item sm />
        </Hidden>
      </Grid>
    </Toolbar>
  </AppBar>
);

NavBar.propTypes = {
  classes: PropTypes.shape({
    flex: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(NavBar);
