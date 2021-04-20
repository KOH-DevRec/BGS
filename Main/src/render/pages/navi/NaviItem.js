// ライブラリーのインポート
import React from "react";
import { Link } from "react-router-dom";

// CSSのインポート
import './navi.css';

// コンポーネントのインポート
import { StateStore } from '../../state/stores.js';

// 画像のインポート
import HOME from './image/home.png';
import MENU from './image/menu.png';
import STREAM from './image/stream.png';

// グローバルナビ内のリンク
export default class NaviItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (StateStore.userStatus != "streamer") {
            return (
                <ul>
                    <div class="page">
                        <img src={HOME} class="menu-icon" alt="icon" />
                        <Link to="/top">ホーム</Link>
                    </div>
                    <div class="page">
                        <img src={MENU} class="menu-icon" alt="icon" />
                        <Link to="/program">番組表</Link>
                    </div>
                </ul>
            );
        } else {
            return (
                <ul>
                    <div class="page">
                        <img src={STREAM} class="menu-icon" alt="icon" />
                        <Link to="/streaming">配信</Link>
                    </div>
                </ul>
            );
        }
    }
}
