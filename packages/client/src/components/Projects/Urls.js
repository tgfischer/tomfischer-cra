import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import LinkChip from "../LinkChip";

const styles = {
  listItem: {
    paddingTop: "0px",
    paddingBottom: "0px"
  }
};

const Urls = ({ urls }) => (
  <Grid container spacing={8}>
    <Grid item xs={12}>
      <Typography variant="h6">URLs</Typography>
    </Grid>
    {urls.map(url => (
      <Grid key={url} item xs={12} sm={6} md={6} lg={4}>
        <LinkChip label={url} url={url} />
      </Grid>
    ))}
  </Grid>
);

Urls.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  classes: PropTypes.shape({
    listItem: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(Urls);
