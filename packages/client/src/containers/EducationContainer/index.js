import React, { Component } from "react";
import { connect } from "react-redux";

import Education from "../../components/Education";
import * as selectors from "./selectors";
import { fetchTranscript } from "./actions";

class EducationContainer extends Component {
  async componentDidMount() {
    if (this.props.transcript) {
      return;
    }

    await this.props.fetchTranscript();
  }

  render() {
    return <Education {...this.props} />;
  }
}

const mapStateToProps = state => ({
  transcript: selectors.getTranscript(state),
  isFetching: selectors.getIsFetching(state)
});

export default connect(
  mapStateToProps,
  {
    fetchTranscript
  }
)(EducationContainer);
