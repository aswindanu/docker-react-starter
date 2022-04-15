import React, { Component } from "react";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../../store/store";

class Custom extends Component {
  constructor(props){
    super(props)

    this.state = {
      local: 'localstate',
      propstostate: props.value,
      clicked: 0,
    };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.GetCustom();
  }

  onClick() {
    this.setState({clicked: Math.random()})
  }

  render() {
    return (
      <div>
        <h1>This is Custom</h1>
        <h3>Props Example :</h3>
        <p>{console.log(this.props.enabled, "Custom")}</p>
        <p>{String(this.props.enabled)} &gt; enabled</p>
        <p>{String(this.props.is_login)} &gt; is_login</p>
        <p>{String(this.props.value)} &gt; value</p>
        <p>{String(this.state.local)} &gt; local</p>
        <p>{String(this.state.propstostate)} &gt; propstostate</p>
        <p>{String(process.env.REACT_APP_FLAGHOST)} &gt; flaghost</p>
        <p>{String(this.state.clicked)} &gt; clicked</p>
        <button onClick={ this.onClick } onKeyDown={ this.onClick }>Click me</button>
      </div>
    );
  }
}

export default connect(
  "is_login, enabled, actions",
  actions
)(withRouter(Custom));
