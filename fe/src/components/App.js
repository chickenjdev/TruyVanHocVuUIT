import React, { Component } from "react";

import '../styles/App.css';
import ScreenForm from './ScreenForm';
import Titbar from './Titbar';

import 'bootstrap/dist/css/bootstrap.css';

function App() {

    return (
        <div >
        <Titbar> </Titbar> 
        <ScreenForm > </ScreenForm> 
        </div>
    );

}

export default App;