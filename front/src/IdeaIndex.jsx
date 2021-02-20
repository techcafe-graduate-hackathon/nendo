
import "./IdeaIndex.css";
import React, { Component } from "react";
import IdeaCard from "./IdeaCard"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
	}

	componentDidMount() {
        axios
            // session利用のため withCredentials: true を指定
            .get("localhost:3000" + "/ideas")
            .then((results) => {
                console.log(results.data);
            })
            .catch((data) => {
                console.log(data);
            });
	}

    render() {
        return (
            <div className="bg_fram">
                <div className="logo_bar">
                    nendo
                </div>
                <div className="tile_fram">
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
