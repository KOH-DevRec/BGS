// ライブラリーのインポート
import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

// CSSのインポート
import './login.css';

// 画像のインポート
import BGS from './image/BGS_icon.png';

// コンポーネントのインポート
import { Actions } from './../../state/actions.js';
import { StateStore } from '../../state/stores.js';

// ログイン画面
export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: "", password: "", jump: "" };
    }

    login() {
        console.log("ログイン待機");

        var data = {
            email: this.state.email,
            password: this.state.password
        };

        fetch("https://bgs.sstn.jp/api/login", {
        // fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            return (response.json())
        }).then(json => {
            if (json != false) {
                console.log(json)
                Actions.inputUserID(json[0].ID);
                Actions.getStreamingID(json[0].channelID);
                this.setState({ jump: StateStore.nowPage });
            } else {
                this.setState({ password: "" });
                alert("メールアドレスかパスワードに誤りがあります");
            }
        })
    }

    render() {
        if (this.state.jump) {
            return <Redirect to={this.state.jump} />
        }

        return (
            <div id="login-body">
                <div id="item-body">
                    <form id="login-item" action="/api/login" method="POST">
                        <img src={BGS} id="theme-login" alt="logo" />
                        <input type="email" class="login-input" vsalue={this.state.email} placeholder="メールアドレス" onChange={(e) => this.setState({ email: e.target.value })} required autofocus></input>
                        <input type="password" class="login-input" value={this.state.password} placeholder="パスワード" onChange={(e) => this.setState({ password: e.target.value })}></input>
                        <button type="button" id="send-button" onClick={(e) => this.login()}>ログイン</button><br />
                        <p id="forget"><Link to="/top">パスワードを忘れた場合</Link></p>
                        <p id="sign-in"><Link to="/top">アカウントをお持ちでない方</Link></p>
                    </form>
                </div>
            </div>
        );
    }
}