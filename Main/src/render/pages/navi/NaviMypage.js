// ライブラリーのインポート
import React from "react";
import { Link } from "react-router-dom";

// CSSのインポート
import './navi.css';

// コンポーネントのインポート
import { StateStore } from '../../state/stores.js'

// 画像のインポート
import ACCOUNT from './image/account.png';

// グローバルナビ
export default class NaviMypage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (StateStore.userID != "") {
            return (
                <div id="navi-mypage-body">
                    <div id="navi-mypage-item">
                        <img src={ACCOUNT} class="menu-icon" alt="icon" />
                        <Link to="/mypage">マイページ</Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}
