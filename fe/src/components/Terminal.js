import React, { Component } from "react";
import Title from './Title';
// import client from "../utils/conenctGRPC"
// import { Command, Log } from "../utils/stub/log_pb"

import axios from 'axios';


const code = `function add(a, b) {
    return a + b;
  }
  `;

const requestPram = {
    "command": "cat:789812821",
    "change": false,
    "env": "prod",
    "server": "148"
}

function Terminal() {

    // componentDidMount() {
    //     // axios.post('http://localhost:30300/catlog',requestPram
    //     // ).then(()=>{console.log("response")});

    // }

    return (<div class="form-screen" >
        <Title />
        <div class="p-3" >
            <span class="p-3 pb-3"
                for="logTerminal" > Log service
                 </span>
            <textarea class="form-control rounded-0 terminal"
                id="logTerminal"
                rows="25" >
                { /* {this.props.searchContent} */}
            </textarea>
        </div>
    </div>
    );

}

export default Terminal;