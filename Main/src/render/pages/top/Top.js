// ライブラリーのインポート
import React from "react";
import Slider from "react-slick";

// CSSのインポート
import './top.css';
// import "../../../../node_modules/slick-carousel/slick/slick.css";
// import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

// コンポーネントのインポート
import GetList from './GetList.js';
import { Actions } from './../../state/actions.js';

// ホーム画面
export default class TopPage extends React.Component {

    constructor(props) {
        super(props);
        Actions.changePage("top");
    }

    render() {
        return (
            <div class="body">
                <h1 class="title">おすすめ</h1>
                <GetList tmpCategory={"%#飲食店%-#旅館%"} />

                <h1 class="title">飲食店</h1>
                <GetList tmpCategory={"%#飲食店%"} />

                <h1 class="title">旅館とホテル</h1>
                <GetList tmpCategory={"%#旅館%-%ホテル%"} />
            </div>
        );
    }
}