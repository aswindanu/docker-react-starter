import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";

import { actions } from "../store/store";

import { component } from "../components/component";


class Home extends Component {
  render() {
    const { TextArea, Button, BoxArea } = component;
    return (
      <>
        <BoxArea classAttr="box-style box-body" childComponent={
          <>
            <TextArea label="Username or email address"/>
            <TextArea label="Password" forgotPassword={true} />
            <Button label="Enter"/>
          </>
        }/>
      </>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Home));


