import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import Login from "../../components/Login";
import { login } from "./actions";

class LoginContainer extends Component {
  componentDidMount() {
    if (!localStorage.getItem("id_token")) {
      return;
    }

    this.props.history.replace("/");
  }

  render() {
    return <Login {...this.props} />;
  }
}

LoginContainer.propTypes = {
  onValidSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired
  }).isRequired
};

export default connect(
  null,
  {
    onValidSubmit: login
  }
)(withRouter(LoginContainer));
