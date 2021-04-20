// ライブラリーのインポート
import React from "react";

// CSSのインポート
import './streaming.css';

// コンポーネントのインポート
import Menu from './Menu.js';
import Message from './Message.js';
import GetMyStreaming from './GetMyStreaming.js';
import GetStreamingDetail from './GetStreamingDetail.js';
import { Actions } from '../../state/actions.js';

export default class Streaming extends React.Component {

    constructor(props) {
        super(props);
        Actions.changePage("streaming");
    }

    render() {
        return (
            <div>
                <GetMyStreaming />
                <GetStreamingDetail />
                <Menu />
                <Message />
            </div>
        );
    }
}
