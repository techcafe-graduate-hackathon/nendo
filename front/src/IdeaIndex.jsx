
import "./IdeaIndex.css";
import React from "react";
import IdeaCard from "./IdeaCard";
import axios from "axios";
class IdeaIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			Data_Array:[]
		};
	}
	componentDidMount() {
        axios
            // session利用のため withCredentials: true を指定
            .get("http://localhost:8000/ideas")
            .then((results) => {
                console.log(results.data[0].contents);
                this.setState({
                    Data_Array: results.data[0].contents,
                  });
            })
            .catch((data) => {
                console.log(data);
            });
	}

    render() {
        return (
            <div className="index_frame">
                <div className="tile_fram">
                    {
                        this.state.Data_Array.map((detail) => {
                        return (
                            <div className="tile_row">
                                <IdeaCard title={detail.title}/>
                                <IdeaCard title={detail.title}/>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default IdeaIndex;
