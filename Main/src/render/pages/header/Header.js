// ライブラリーのインポート
import React from "react";
import { Link } from "react-router-dom";

// CSSのインポート
import './header.css';

// コンポーネントのインポート
import { StateStore } from '../../state/stores.js';
import SearchBar from './SearchBar.js';

// 画像のインポート
import BGS from './image/BGS_icon.png';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (StateStore.userID == "") {
            return (
                <header>
                    <Link to="/top" style={{ textDecoration: 'none' }}>
                        <img src={BGS} id="theme" alt="logo" />
                    </Link>
                    <SearchBar></SearchBar>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <button type="button" id="login-button">ログイン</button>
                    </Link>
                </header>
            );
        } else {
            if (StateStore.nowPage == "top" || StateStore.nowPage == "program") {
                return (
                    <header>
                        <Link to="/top" style={{ textDecoration: 'none' }}>
                            <img src={BGS} id="theme" alt="logo" />
                        </Link>
                        <SearchBar></SearchBar>
                    </header>
                );
            } else {
                return (
                    <header>
                        <Link to="/top" style={{ textDecoration: 'none' }}>
                            <img src={BGS} id="theme" alt="logo" />
                        </Link>
                    </header>
                );
            }
        }
    }
}