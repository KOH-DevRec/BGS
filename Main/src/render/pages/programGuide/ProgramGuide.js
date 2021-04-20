// ライブラリーのインポート
import React from "react";

// CSSのインポート
import './programGuide.css';

// コンポーネントのインポート
import { Actions } from './../../state/actions.js';

export default class ProgramGuide extends React.Component {

    constructor(props) {
        super(props);
        Actions.changePage("program");
    }

    render() {
        return (
            <div id="program-body">
                <h1 class="title">準備中</h1>
            </div>
        );
    }
}