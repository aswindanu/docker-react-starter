import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../store/store";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <img class="header-logo" src="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg" title="github icons"/>
          </div>
          <h2>This Is Header</h2>
        </header>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Header));
