// ライブラリーのインポート
import React from "react";
import { Redirect } from "react-router-dom";

// CSSのインポート
import './mypage.css';

// コンポーネントのインポート
import MyStatus from './MyStatus.js';
import MyChannel from "./MyChannel.js";
import { Actions } from './../../state/actions.js';

// マイページ
export default class MyPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { streamingID: "", jump: "" };
        Actions.changePage("mypage");
    }

    logout() {
        Actions.inputUserID("");
        Actions.changeUserStatus("");
        Actions.getStreamingID("");
        this.setState({ jump: "/top/" });
    }

    render() {
        if (this.state.jump) {
            return <Redirect to={this.state.jump} />
        }

        return (
            <div class="mypage-body">
                <h1 class="title">ステータス</h1>
                <MyStatus />
                <MyChannel />
                <button type="button" id="logout-button" onClick={(e) => this.logout()}>ログアウト</button>
            </div>
        );
    }
}
