// ライブラリーのインポート
import React from "react";

// CSSのインポート
import './header.css';

// 画像のインポート
import SEARCH from './image/search.png';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="menu">
                <input type="search" id="search" placeholder="お店やジャンルを検索" ></input>
                <input type="image" id="search-button" src={SEARCH}></input>
            </div>
        );
    }
}