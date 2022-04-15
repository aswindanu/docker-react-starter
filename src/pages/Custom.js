import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";

import { actions } from "../store/store";

import { component } from "../components/component";


class Flag extends Component {
  render() {
    const { Custom } = component;
    return (
      <div>
        <h1>Hello</h1>
        <Custom
          value="25000"
        />
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Flag));
