import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withFormsy } from "formsy-react";
import uuid from "uuid/v4";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

const styles = {
  error: {
    color: red[500]
  }
};

class ControlledTextField extends Component {
  constructor(props) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue({ currentTarget }) {
    this.props.setValue(currentTarget.value);
  }

  render() {
    const {
      classes,
      label,
      margin,
      innerRef,
      value,
      validations,
      validationError,
      validationErrors,
      required,
      getValue,
      setValue,
      resetValue,
      getErrorMessage,
      getErrorMessages,
      isValid,
      isValidValue,
      isRequired,
      showRequired,
      isPristine,
      isFormDisabled,
      isFormSubmitted,
      formNoValidate,
      hasValue,
      setValidations,
      showError,
      ...otherProps
    } = this.props;
    const isInputValid = isValid() || isPristine();

    return (
      <Fragment>
        <TextField
          label={isRequired() ? `${label} *` : label}
          onChange={this.onChangeValue}
          value={getValue() || ""}
          error={!isInputValid}
          margin={margin}
          {...otherProps}
        />
        {!isInputValid &&
          getErrorMessages().map(message => (
            <Typography key={uuid()} className={classes.error} variant="body1">
              {getErrorMessage()}
            </Typography>
          ))}
      </Fragment>
    );
  }
}

ControlledTextField.propTypes = {
  classes: PropTypes.shape({
    error: PropTypes.string.isRequired
  }).isRequired,
  getValue: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
  margin: PropTypes.string
};

ControlledTextField.defaultProps = {
  margin: "normal"
};

export default withStyles(styles)(withFormsy(ControlledTextField));
