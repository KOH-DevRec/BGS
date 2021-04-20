// ライブラリーのインポート
import React from "react";

// CSSのインポート
import './view.css';

// コンポーネントのインポート
import GetDetail from './GetDetail.js';
import GetStreaming from './GetStreaming.js';
import { Actions } from './../../state/actions.js';

export default class View extends React.Component {

    constructor(props) {
        super(props);
        Actions.changePage("view");
    }

    render() {
        return (
            <div className="App">
                <body>
                    <GetStreaming />
                    <GetDetail />
                </body>
            </div >
        );
    }
}