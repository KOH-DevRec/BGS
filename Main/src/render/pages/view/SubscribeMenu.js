// ライブラリーのインポート
import React from "react";
import { Link } from "react-router-dom";

// CSSのインポート
import './subscribe.css';

// コンポーネントのインポート
import { StateStore } from '../../state/stores.js'

export default class SubscribeMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (StateStore.userID == "") {
            return (
                <Link to="/login"><button type="button" id="subscribe-login">このチャンネルにサブスクする</button></Link>
            );
        } else {
            return (
                <div>
                    <select id="subscribe">
                        <option hidden>サブスクライブ</option>
                        <option value="100">月額100円</option>
                        <option value="200">月額200円</option>
                        <option value="500">月額500円</option>
                    </select>
                    <button type="button" id="subscribe-button" onClick={(e) => alert("チャンネルへサブスクしました")}>確定</button>
                </div>
            );
        }
    }
}