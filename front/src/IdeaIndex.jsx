
import "./IdeaIndex.css";
import React from "react";
import IdeaCard from "./IdeaCard";
import axios from "axios";
import DetailsModal from "./DetailsModal"
class IdeaIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			Data_Array:[],
			is_modal:false,
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
    getColorClass(category){
        switch(category){
            case "暮らし":
                return "card_frame card_color_life";
            case "生き物":
                return "card_frame card_color_creature";
            case "教育":
                return "card_frame card_color_education";
            case "音楽":
                return "card_frame card_color_music";
            case "ゲーム":
                return "card_frame card_color_game";
            case "食べ物":
                return "card_frame card_color_food";
            default:
                return "card_frame card_color_music";
        }
    }


	toggle_modal(){
		this.setState({is_modal:!this.state.is_modal});
		console.log(this.state.is_modal);
	}
	
	card_view(detail){
		if(detail.id % 2 === 0 ){
			return(
				<div className="tile_row left" onClick={()=>this.toggle_modal()}>
					<IdeaCard title={detail.title} place="right" 
					color_class={this.getColorClass(detail.category.name)} 
					 />
				</div>
			);
		}
		else{
			return(
				<div className="tile_row right" onClick={()=>this.toggle_modal()}>
					<IdeaCard title={detail.title} place="right" 
					color_class={this.getColorClass(detail.category.name)} 
					/>
				</div>
			);
		}
	}


    render() {
        return (
            <div className="index_frame">
                <div className="tile_fram">
                    {
                        this.state.Data_Array.map((detail) => {
                        return (
                            this.card_view(detail)
                            );
                        })
                    }
                </div>
				{this.state.is_modal ? (
                    < DetailsModal func={()=>this.toggle_modal()}/>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default IdeaIndex;
