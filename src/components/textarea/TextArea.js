import React, { Component } from "react";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../../store/store";

import "./TextArea.css";

class TextArea extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { label, identity, forgotPassword, functionChange } = this.props;  //props dari file lain atau atribute. props global adalah store. props lain adalah atribute, contoh label, forgotpassword, dll, tergntung penamaan.
        return (
            <div>
                <div>
                    <div>
                       <div className="text-left">
                            <label>{label}</label>
                            <span>
                                {/* kondisi if else ternary, e.g. <kondisi> ? <jika true> : <jika false>; */}
                                {
                                    forgotPassword == true 
                                    ? <a className="text-right" href="#">forgot password?</a> 
                                    : <></>
                                }  
                            </span> 
                        </div> 
                    </div>
                    <div>
                        <input onChange={e => functionChange(e.target.value, identity)}></input>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect(
    "",
    actions
)(withRouter(TextArea));
