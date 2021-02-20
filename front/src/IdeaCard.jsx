import "./IdeaCard.css";
import React, { Component } from "react";
import GoodIcon from "./image/good_icon.png"
class IdeaCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="card_frame">
                <p className="idea_title">タイトル</p>
                <div className="tag_list">
                    <p className="tag_frame">#音楽</p>
                    <p className="tag_frame">#運動</p>
                    <p className="tag_frame">#アプリ</p>
                </div>
                <img className="good_icon" src={GoodIcon} alt=""/>
            </div>
        );
    }
}

export default IdeaCard;
