import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Technology = ({ technologies }) => (
  <Grid container spacing={8}>
    <Grid item xs={12}>
      <Typography variant="h6">Technologies Used</Typography>
    </Grid>
    {technologies.map(technology => (
      <Grid key={technology} item xs={12} sm={6} md={6} lg={4}>
        <Chip label={technology} color="secondary" />
      </Grid>
    ))}
  </Grid>
);

Technology.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Technology;
