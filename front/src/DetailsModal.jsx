import "./DetailsModal.css";
import React from "react";
import GoodIcon from "./image/good_icon.png"
class DetailsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="modal-container">
				<section class="content">
					<h1 class="ideaTitle">走るテンポを音楽で整えたい！</h1>
					<img src={GoodIcon}  alt="いいねボタン" />
					<div class="tagcontainer">
						<span class="tag">#音楽</span>
						<span class="tag">#運動</span>
						<span class="tag">#アプリ</span>
					</div>
					<p class="text">音楽のテンポによってランニング中のユーザの走る速度を提案し、整える音楽再生アプリです。 音楽のテンポによってランニング中のユーザの走る速度を提案し、整える音楽再生アプリです。音楽のテンポによってランニング中のユーザの走る速度を提案し、整える音楽再生アプリです。 音楽のテンポによってランニング中のユーザの走る速度を提案し、整える音楽再生アプリです。音楽のテンポによってランニング中のユーザの走る速度を提案し、整える音楽再生アプリです。</p>
				</section>
            </div>
        );
    }
}

export default DetailsModal;
