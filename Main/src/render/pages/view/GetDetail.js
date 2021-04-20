// ライブラリーのインポート
import React from "react";

// CSSのインポート
import './view.css';
import './subscribe.css';

// 画像のインポート
import Visitor from './image/visitor.png';
import LinkImage from './image/link.png';
import SEND from './image/send_button.png';

// コンポーネントのインポート
import GetSignboard from './GetSignboard.js';
import SubscribeMenu from './SubscribeMenu.js';
import { StateStore } from '../../state/stores.js';

// 配信の詳細の表示
export default class GetDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = { streamName: "", streamStartTime: "", streamEndTime: "", streamCategory: "", streamUrl: "", streamingHoliday: "" };
        this.showDetail();
    }

    showDetail() {
        console.log("配信詳細の取得");

        var data = {
            ID: StateStore.streaming
        };

        fetch("https://bgs.sstn.jp/api/ShowDetail", {
        // fetch("http://localhost:3000/api/ShowDetail", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then(response => {
            return (response.json())

        }).then(json => {
            console.log("配信詳細の取得結果");
            this.setState({ streamName: json[0].name });
            this.setState({ streamStartTime: json[0].time_start.substr(0, 5) });
            this.setState({ streamEndTime: json[0].time_end.substr(0, 5) });
            this.setState({ streamCategory: json[0].category });
            this.setState({ streamUrl: json[0].link });
            this.setState({ streamingHoliday: json[0].regular_holiday });
            this.forceUpdate();
        })
    }

    render() {

        return (
            <div className="detail">
                <div className="logo-body">
                    <GetSignboard image={"restaurant1"}/>
                </div>
                <div className="detail-item">
                    <p className="stream-name">{this.state.streamName}</p>
                    <p className="stream-name-under">より配信中</p>
                    <p className="detail-text">{this.state.streamStartTime}〜{this.state.streamEndTime}{this.state.streamingHoliday}<br />{this.state.streamCategory}</p>
                    <p className="detail-text">
                        <img src={Visitor} alt="logo" className="icon" />24人が来店中</p>
                    <p className="detail-text">
                        <img src={LinkImage} alt="logo" className="icon" />
                        <a id="homepage" href={this.state.streamUrl} target="_blank">公式サイトへ</a></p>
                    <div id="input-item">
                        <input type="text" id="input-area" placeholder="メッセージを入力"></input>
                        <input type="image" id="message-send" src={SEND}></input>
                    </div>
                    <SubscribeMenu />
                </div>
            </div>
        );
    }
}