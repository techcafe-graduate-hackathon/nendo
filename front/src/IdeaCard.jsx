import "./IdeaCard.css";
import React from "react";
import GoodIcon from "./image/good_icon.png"
class IdeaCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            good_icon_ispushed:false
        };
    }
    IsPushedGood(){
        this.setState({good_icon_ispushed:!this.state.good_icon_ispushed});
    }
    getGoodIconClass(status){
        if(status){
            return "good_icon good_icon_ispushed";
        }else{
            return "good_icon good_icon_color";
        }
    }
    render() {
        return (
            <div className="content_frame">
                {/* <div className="card_frame card_color_music"> */}
                <div className={this.props.color_class}>
                    <p className="idea_title">{this.props.title}</p>
                    <div className="tag_list">
                        <p className="tag_frame">#音楽</p>
                        <p className="tag_frame">#運動</p>
                        <p className="tag_frame">#アプリ</p>
                    </div>
                </div>
                <img className={this.getGoodIconClass(this.state.good_icon_ispushed)} src={GoodIcon} alt="" onClick={()=>this.IsPushedGood()}/>
            </div>
        );
    }
}

export default IdeaCard;
