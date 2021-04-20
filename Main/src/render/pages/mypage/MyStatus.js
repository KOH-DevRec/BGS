// ライブラリーのインポート
import React from "react";

// CSSのインポート
import './mypage.css';

// コンポーネントのインポート
import { StateStore } from '../../state/stores.js';
import { Actions } from './../../state/actions.js';

// マイページ
export default class MyStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = { streamingID: "" };
    }

    changeStatus(tmpStatus) {
        Actions.changeUserStatus(tmpStatus);
        location.reload();
    }

    render() {
        if (StateStore.streaming != null) {
            if (StateStore.userStatus == "streamer") {
                return (
                    <div>
                        <p class="mypage-text">配信者としてログインしています</p>
                        <button type="button" id="mypage-button" onClick={(e) => this.changeStatus("audience")}>ステータスの切り替え</button>
                    </div>
                );
            } else {
                return (
                    <div>
                        <p class="mypage-text">視聴者としてログインしています</p>
                        <button type="button" id="mypage-button" onClick={(e) => this.changeStatus("streamer")}>ステータスの切り替え</button>
                    </div>
                );
            }
        } else {
            return (
                <div>
                    <p class="mypage-text">視聴者としてログインしています<br />
                    配信を行う場合は権限を取得してください</p>
                </div>
            );
        }
    }
}
