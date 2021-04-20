// ライブラリーのインポート
import React from "react";

// CSSのインポート
import './menu.css';

// コンポーネントのインポート
import { StateStore } from '../../state/stores.js'
import { Actions } from '../../state/actions.js';

// 配信の詳細の表示
export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { camera: "off", microphone: "off", nowStreaming: "配信開始", time: "00:06", nowStreamingID: "jgsngr3bkbj4b" };
    }

    switchCamera() {
        if (this.state.camera == "off") {
            this.setState({ camera: "on" });
            // ここにカメラをonにする処理を書く
        } else {
            this.setState({ camera: "off" });
            // ここにカメラをonにする処理を書く
        }
        // そっちの切り替えの仕様によってはここでも可
    }

    switchMicrophone() {
        if (this.state.microphone == "off") {
            this.setState({ microphone: "on" });
            // ここにマイクをonにする処理を書く
        } else {
            this.setState({ microphone: "off" });
            // ここにマイクをonにする処理を書く
        }
        // そっちの切り替えの仕様によってはここでも可
    }

    render() {
        return (
            <div id="menu-body">
                <div class="streaming-menu-switch">
                    カメラ
                <button type="button" class="streaming-menu-button" onClick={(e) => this.switchCamera()}>{this.state.camera}</button>
                </div>
                <div class="streaming-menu-switch">
                    マイク
                <button type="button" class="streaming-menu-button" onClick={(e) => this.switchMicrophone()}>{this.state.microphone}</button>
                </div>
                <div>
                    <p class="menu-title">配信開始から</p>
                    <p class="menu-text">{this.state.time}</p>
                </div>
                <div>
                    <p class="menu-title">配信ID</p>
                    <p class="menu-text">{this.state.nowStreamingID}</p>
                </div>
            </div>
        );
    }
}