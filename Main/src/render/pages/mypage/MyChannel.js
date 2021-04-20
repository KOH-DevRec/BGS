// ライブラリーのインポート
import React from "react";

// CSSのインポート
import './mypage.css';

// コンポーネントのインポート
import { StateStore } from '../../state/stores.js'

// マイページ内のチャンネル登録表示
export default class MyChannel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (StateStore.userStatus != "streamer") {
            return (
                <div>
                    <h1 class="title">サブスクライブ中</h1>
                    <div class="subscribe-items">
                        <div class="subscribe-item">
                            <div class="subscribe-image"></div>
                            <div class="subscribe-detail">
                                <p class="subscribe-title">洋食屋さん「りもーね」</p>
                                <p class="subscribe-text">毎日11:30〜21:00</p>
                                <p class="subscribe-text">#飲食店　#洋食　#限定配信有</p>
                                <p class="subscribe-text">月額200円</p>
                            </div>
                        </div>
                        <div class="subscribe-item">
                            <div class="subscribe-image"></div>
                            <div class="subscribe-detail">
                                <p class="subscribe-title">洋食屋さん「りもーね」</p>
                                <p class="subscribe-text">毎日11:30〜21:00</p>
                                <p class="subscribe-text">#飲食店　#洋食　#限定配信有</p>
                                <p class="subscribe-text">月額200円</p>
                            </div>
                        </div>
                        <div class="subscribe-item">
                            <div class="subscribe-image"></div>
                            <div class="subscribe-detail">
                                <p class="subscribe-title">洋食屋さん「りもーね」</p>
                                <p class="subscribe-text">毎日11:30〜21:00</p>
                                <p class="subscribe-text">#飲食店　#洋食　#限定配信有</p>
                                <p class="subscribe-text">月額200円</p>
                            </div>
                        </div>
                    </div>
                    <h1 class="title">チャンネル登録</h1>
                    <div class="subscribe-items">
                        <div class="subscribe-item">
                            <div class="subscribe-image"></div>
                            <div class="subscribe-detail">
                                <p class="subscribe-title">洋食屋さん「りもーね」</p>
                                <p class="subscribe-text">毎日11:30〜21:00</p>
                                <p class="subscribe-text">#飲食店　#洋食　#限定配信有</p>
                                <p class="subscribe-text">月額200円</p>
                            </div>
                        </div>
                        <div class="subscribe-item">
                            <div class="subscribe-image"></div>
                            <div class="subscribe-detail">
                                <p class="subscribe-title">洋食屋さん「りもーね」</p>
                                <p class="subscribe-text">毎日11:30〜21:00</p>
                                <p class="subscribe-text">#飲食店　#洋食　#限定配信有</p>
                                <p class="subscribe-text">月額200円</p>
                            </div>
                        </div>
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
