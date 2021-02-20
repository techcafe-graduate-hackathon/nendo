import "./HeaderBar.css";
import React, { Component } from "react";
import HeadImage from "./image/header_image.png"
class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="header_frame">
                <img className="bg_img" src={HeadImage} alt="" />
                <p className="logo_title">nendo</p>
            </div>
        );
    }
}

export default HeaderBar;
