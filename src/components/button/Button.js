import React, { Component } from "react";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../../store/store";
import "./Button.css";

class Button extends Component {
  render() {
    const { functionClick } = this.props;
    return (
      <div>
        <input onClick={e => functionClick()} type="submit" className="button-style"></input>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Button));
