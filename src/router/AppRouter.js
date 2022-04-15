import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";

import MainRoute from "./MainRoute.js";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

class AppRouter extends Component {
  postSignout = () => {
    this.props.postLogout();
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Header postSignout={this.postSignout} />
          <MainRoute />
        <Footer />
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(AppRouter));
