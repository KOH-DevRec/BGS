// ライブラリーのインポート
import React from "react";

// CSSのインポート
import './streaming.css';

// コンポーネントのインポート
import GetMySignboard from './GetMySignboard.js';
import { StateStore } from '../../state/stores.js';

// 画像のインポート
import SIGNBOARD from './image/limone_signboard.png';

export default class GetStreamingDetail extends React.Component {

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
            <div id="my-detail-body">
                <div class="my-detail-item1">
                    <GetMySignboard image={"restaurant1"}/><br />
                    <button type="button" id="edit-button">編集</button>
                </div>
                <div class="my-detail-item2">
                    <p class="streaming-detail-title">お店や施設の名前</p>
                    <p class="streaming-detail-text">{this.state.streamName}</p>
                    <p class="streaming-detail-title">配信時間</p>
                    <p class="streaming-detail-text">{this.state.streamStartTime}〜{this.state.streamEndTime}</p>
                    <p class="streaming-detail-title">定休日</p>
                    <p class="streaming-detail-text">{this.state.streamingHoliday}</p>
                </div>
                <div class="my-detail-item3">
                    <p class="streaming-detail-title">配信のジャンル</p>
                    <p class="streaming-detail-text">{this.state.streamCategory}</p>
                    <p class="streaming-detail-title">公式サイトやSNS</p>
                    <p class="streaming-detail-text"><a id="homepage" href={this.state.streamUrl} target="_blank">{this.state.streamUrl}</a></p>
                </div>
            </div>
        );
    }
}