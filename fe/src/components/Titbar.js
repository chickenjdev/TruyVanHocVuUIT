import React, { Component } from "react";

import { List, Search } from 'react-bootstrap-icons';

function Titbar() {
    return (
        <div class="titbar row" >
            <div class="col-sm-5" >
                <List color="#1574b3"
                    size={24} />
            </div>
            <div class="col-sm-5 color font-weight-bold" >
                Truy vấn học vụ UIT - Search Engine
        </div>
        </div>
    );
}

export default Titbar;