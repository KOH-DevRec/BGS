// ライブラリーのインポート
import React from "react";
import { Link } from "react-router-dom";

// CSSのインポート
import './navi.css';

// コンポーネントのインポート
import NaviMypage from './NaviMypage.js';
import NaviItem from './NaviItem.js';

// 画像のインポート
import BGS from './image/BGS_icon.png';

// グローバルナビの表示部分
export default class Navi extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.page == "view") {
            return (
                <nav className="navi-body-view">
                    <Link to="/top" style={{ textDecoration: 'none' }}>
                        <img src={BGS} id="theme" alt="logo" />
                    </Link>
                    <NaviItem />
                    <NaviMypage />
                </nav>
            );
        } else {
            return (
                <nav className="navi-body">
                    <NaviItem />
                    <NaviMypage />
                </nav>
            );
        }
    }
}
