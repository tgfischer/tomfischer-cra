import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import LinkIcon from "@material-ui/icons/Link";

const LinkChip = ({ label, url }) => (
  <Chip
    color="secondary"
    avatar={
      <Avatar>
        <LinkIcon />
      </Avatar>
    }
    variant="outlined"
    label={label}
    component="a"
    href={url}
    target="blank"
    clickable
  />
);

LinkChip.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default LinkChip;
