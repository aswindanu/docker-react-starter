import React, { Component } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
// import { Link } from "react-router-dom";
>>>>>>> c49ab5e28d849f6558811cf306642d31ce266937
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
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
