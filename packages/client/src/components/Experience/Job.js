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

import Skills from "./Skills";

const styles = {
  root: {
    backgroundColor: "white"
  },
  container: {
    padding: "24px"
  },
  logo: {
    width: "100%"
  },
  listItem: {
    paddingTop: "6px",
    paddingBottom: "6px"
  }
};

const Job = ({ job, classes }) => (
  <Paper className={classes.root} elevation={5}>
    <div className={classes.container}>
      <Grid container spacing={24} alignItems="center">
        <Grid item xs={12} sm={9}>
          <Typography variant="h4">{job.company}</Typography>
          <Typography variant="body1">
            {job.startDate} - {job.endDate}
          </Typography>
          <List>
            {job.details.map(detail => (
              <ListItem key={detail} className={classes.listItem}>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary={<Typography>{detail}</Typography>} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={3}>
          <img className={classes.logo} src={job.logo} alt={job.company} />
        </Grid>
      </Grid>
      <Skills skills={job.skills} company={job.company} />
    </div>
  </Paper>
);

Job.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    listItem: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(Job);
