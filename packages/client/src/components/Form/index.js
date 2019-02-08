import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Formsy from "formsy-react";

import TextField from "./TextField";
import SubmitButton from "./SubmitButton";

const renderChildren = ({ children, isFormValid }) =>
  React.Children.map(
    children,
    child =>
      child.type === SubmitButton
        ? React.cloneElement(child, { isFormValid })
        : child
  );

class Form extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isFormValid: false
    };

    this.onFormInvalid = this.onFormInvalid.bind(this);
    this.onFormValid = this.onFormValid.bind(this);
  }

  onFormInvalid() {
    return this.setState({ isFormValid: false });
  }

  onFormValid() {
    return this.setState({ isFormValid: true });
  }

  render() {
    const { children, onValidSubmit } = this.props;
    const { isFormValid } = this.state;

    return (
      <Formsy
        onValidSubmit={onValidSubmit}
        onValid={this.onFormValid}
        onInvalid={this.onFormInvalid}
      >
        {renderChildren({ children, isFormValid })}
      </Formsy>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onValidSubmit: PropTypes.func.isRequired
};

Form.TextField = TextField;
Form.SubmitButton = SubmitButton;

export default Form;
