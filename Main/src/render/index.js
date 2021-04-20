import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ヘッダ
import Header from './pages/header/Header';
// ナビ
import Navi from './pages/navi/Navi';
// フッター
import Footer from './pages/footer/Footer';

// ページメイン部分
import Top from "./pages/top/Top";
import View from "./pages/view/View";
import Login from "./pages/login/Login";
import Program from "./pages/programGuide/ProgramGuide";
import MyPage from "./pages/mypage/MyPage";
import Streaming from "./pages/streaming/Streaming";

render(
    <div id="inner-body">
        <Router>
            <Route exact path="/top" ><Navi></Navi><Top></Top><Header></Header><Footer></Footer></Route>
            <Route path="/login" ><Login></Login></Route>
            <Route path="/program" ><Navi></Navi><Program></Program><Header></Header><Footer></Footer></Route>
            <Route path="/mypage" ><Navi></Navi><MyPage></MyPage><Header></Header><Footer></Footer></Route>
            <Route path="/view" ><Navi page={"view"}></Navi><View></View></Route>
            <Route path="/streaming" ><Navi page={"view"}></Navi><Streaming></Streaming></Route>
        </Router>
    </div >,

    document.getElementById('app')
);


