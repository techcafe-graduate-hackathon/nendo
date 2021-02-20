
import "./IdeaIndex.css";
import React from "react";
import IdeaCard from "./IdeaCard";
import axios from "axios";
class IdeaIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

		};
	}

	componentDidMount() {
        axios
            // session利用のため withCredentials: true を指定
            .get("http://localhost:8000/ideas")
            .then((results) => {
                console.log(results.data);
            })
            .catch((data) => {
                console.log(data);
            });
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

export default IdeaIndex;
