import "./App.css";
import React, { Component } from "react";
import IdeaIndex from "./IdeaIndex"
import HeaderBar from "./HeaderBar"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="bg_frame">
                <HeaderBar />
                <IdeaIndex />
            </div>
        );
    }
}

export default App;
