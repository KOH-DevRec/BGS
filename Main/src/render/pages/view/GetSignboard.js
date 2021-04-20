// ライブラリーのインポート
import React from "react";

// 画像のインポート
import SIGNBOARD from './image/ipu.jpg';

// サムネイルの取得
export default class GetSignboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.image == "restaurant1") {
            return (
                <img src={SIGNBOARD} className="logo" />
            );
        } else {
            return (
                <div className="logo"></div>
            );
        }
    }
}