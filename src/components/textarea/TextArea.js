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
        const { label, forgotPassword } = this.props;
        return (
            <div>
                <div>
                    <div>
                       <div className="text-left">
                            <label>{label}</label>
                        <span>
                                {forgotPassword == true ? <a className="text-right" href="#">forgot password?</a> : <></>}
                            </span> 
                        </div> 
                    </div>
                    <div>
                        <input></input>
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
