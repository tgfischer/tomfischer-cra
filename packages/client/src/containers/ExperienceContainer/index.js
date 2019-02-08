import React, { Component } from "react";
import { connect } from "react-redux";

import Experience from "../../components/Experience";
import * as selectors from "./selectors";
import { fetchJobs } from "./actions";

class ExperienceContainer extends Component {
  async componentDidMount() {
    if (this.props.jobs) {
      return;
    }

    await this.props.fetchJobs();
  }

  render() {
    return <Experience {...this.props} />;
  }
}

const mapStateToProps = state => ({
  jobs: selectors.getJobs(state),
  isFetching: selectors.getIsFetching(state)
});

export default connect(
  mapStateToProps,
  {
    fetchJobs
  }
)(ExperienceContainer);
