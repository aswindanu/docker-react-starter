import React, { Component } from "react";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../../store/store";

class Sample extends Component {
  render() {
    return (
      <div>
        <h1>This is Component</h1>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Sample));
