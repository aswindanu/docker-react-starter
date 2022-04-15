import React, { Component } from "react";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../../store/store";
import "./BoxArea.css";

class BoxArea extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { childComponent, classAttr } = this.props;
    return (
        <div className={classAttr}>
          {childComponent}
        </div>

    );
  }
}

export default connect(
  "",
  actions
)(withRouter(BoxArea));
