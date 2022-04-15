import React, { Component } from "react";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../../store/store";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <div>
        <input type="submit" className="button-style"></input>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Button));
