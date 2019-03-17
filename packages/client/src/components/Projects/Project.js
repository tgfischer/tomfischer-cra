import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DoneIcon from "@material-ui/icons/Done";

import Repository from "./Repository";
import Urls from "./Urls";
import Technologies from "./Technologies";

const styles = {
  paper: {
    backgroundColor: "white"
  },
  container: {
    padding: "24px"
  },
  thumbnail: {
    width: "100%"
  },
  listItem: {
    paddingTop: "6px",
    paddingBottom: "6px"
  }
};

const Project = ({ project, classes }) => (
  <Paper className={classes.paper} elevation={5}>
    <div className={classes.container}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={7}>
          <Typography variant="h4">{project.name}</Typography>
          <Typography variant="body1">
            {project.startDate} - {project.endDate || "Present"}
          </Typography>
          <List>
            {project.details.map(detail => (
              <ListItem key={detail} className={classes.listItem}>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary={<Typography>{detail}</Typography>} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img
            className={classes.thumbnail}
            src={project.thumbnail}
            alt={project.name}
          />
        </Grid>
        <Grid item xs={12}>
          <Technologies technologies={project.technologies} />
        </Grid>
        {project.repository && (
          <Grid item xs={12}>
            <Repository repository={project.repository} />
          </Grid>
        )}
        {project.urls.length !== 0 && (
          <Grid item xs={12}>
            <Urls urls={project.urls} />
          </Grid>
        )}
      </Grid>
    </div>
  </Paper>
);

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    urls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    repository: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    thumbnail: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  classes: PropTypes.shape({
    paper: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    listItem: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(Project);
