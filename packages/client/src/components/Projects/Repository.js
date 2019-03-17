import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import Section from "../Section";
import LinkChip from "../LinkChip";

const Repository = ({ repository }) => (
  <Section>
    <Typography variant="h6">Repository</Typography>
    <LinkChip label={repository} url={repository} />
  </Section>
);

Repository.propTypes = {
  repository: PropTypes.string.isRequired
};

export default Repository;
