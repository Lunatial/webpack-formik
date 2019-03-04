import React, {Component} from "react";

import TestForm from '../presentational/testform'
import MyYoutubeForm from "../presentational/youtube";
import MyUpgradedForm from "../presentational/myugradedform";

export default class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: "Hello World!"
        };
    }

    render() {

        return (
            <div style={{
                margin: 'auto',
                textAlign: 'center',
                // maxWidth: "30%",
                padding: '1rem',
                boxShadow: '9px 10px 38px -16px rgba(48,35,48,1)'
            }}>
                <div>{this.state.title}</div>
                {/*<hr/>*/}
                {/*<TestForm/>*/}
                {/*<hr/>*/}
                {/*<MyYoutubeForm instance="pelda@emailfiok.hu"/>*/}
                <hr/>
                <MyUpgradedForm/>
            </div>
        );
    }
}
