import "./IdeaCard.css";
import React, { Component } from "react";
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
            </div>
        );
    }
}

export default IdeaCard;
