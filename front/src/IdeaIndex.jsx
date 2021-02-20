
import "./IdeaIndex.css";
import React, { Component } from "react";
import IdeaCard from "./IdeaCard"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="index_frame">
                <div className="tile_fram">
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                    <div className="tile_row">
                        <IdeaCard />
                        <IdeaCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
