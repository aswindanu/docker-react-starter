import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";

import { actions, store } from "../store/store";

import { component } from "../components/component";


class Register extends Component {
    constructor(props){                                     //digunakan untuk memanggil data manajemen (props global ataupun props dri file lain)
        super(props);
        this.state = {                                      // data lokal state
            "email":"",
            "name":"",
            "gender":"",
            "status": "active"
        }
    }

    functionChange = (value, identity) => {
        // set untuk lokal state
        this.setState(
            { [identity]: value }
        );
        console.log("Data state : ", this.state)
    }

    functionClick = () => {
        // memanggil store (global props) & API
        const { GorestRegister } = this.props;

        // set untuk global store dari state
        store.setState(
            { gorest_register: this.state }
        );
        console.log("Data store : ", store.getState().gorest_register)

        // memanggil API GorestRegister
        GorestRegister();
    }

  render() {
    const { TextArea, Button, BoxArea } = component;
    return (
      <>
        <BoxArea classAttr="box-style box-body" childComponent={
          <>
            <TextArea functionChange={this.functionChange} identity="email" label="Email address"/>
            <TextArea functionChange={this.functionChange} identity="password" label="Password" forgotPassword={true} />
            <TextArea functionChange={this.functionChange} identity="name" label="Nama"/>
            {/* <TextArea functionChange={this.functionChange} identity="first-name" label="Nama depan"/>
            <TextArea functionChange={this.functionChange} identity="last-name" label="Nama belakang"/> */}
            <TextArea functionChange={this.functionChange} identity="gender" label="Jenis Kelamin"/>
            <TextArea functionChange={this.functionChange} identity="date" label="Tanggal lahir"/>
            <TextArea functionChange={this.functionChange} identity="address" label="Alamat"/>
            <Button functionClick={this.functionClick} label="Enter"/>
          </>
        }/>
      </>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Register));