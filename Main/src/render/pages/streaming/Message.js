// ライブラリーのインポート
import React from "react";

// 画像のインポート
import SEND from './image/send_button.png';

// CSSのインポート
import './menu.css';

// コンポーネントのインポート
import { StateStore } from '../../state/stores.js'
import { Actions } from '../../state/actions.js';

// 配信の詳細の表示
export default class Message extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="message-body">
            <div id="input-item-message">
                <input type="text" id="input-area-message" placeholder="メッセージを入力"></input>
                <input type="image" id="message-send" src={SEND}></input>
            </div>
            </div>
        );
    }
}