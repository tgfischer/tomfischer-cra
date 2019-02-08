import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

const SubmitButton = ({ isFormValid, children, ...otherProps }) => (
  <FormControl margin="normal">
    <Button type="submit" disabled={!isFormValid} {...otherProps}>
      {children}
    </Button>
  </FormControl>
);

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  isFormValid: PropTypes.bool
};

SubmitButton.defaultProps = {
  isFormValid: false
};

export default SubmitButton;
