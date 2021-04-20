// ライブラリーのインポート
import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Slider from "react-slick";

// CSSのインポート
import './top.css';
import './slickItem.css';
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

// コンポーネントのインポート
import GetImage from './GetImage.js';
import { Actions } from './../../state/actions.js';

// 配信一覧の取得
export default class GetList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { jump: "" };
        this.streamingList = null;
        this.showStreamingList(this.props.tmpCategory);
    }

    showStreamingList(tmpCategory) {
        console.log("配信一覧の取得");
        let getCategory = tmpCategory.split("-");
        let getCount = getCategory.length;

        var data = {
            count: getCount,
            category: getCategory
        };

        fetch("https://bgs.sstn.jp/api/ShowChannelList", {
        // fetch("http://localhost:3000/api/ShowChannelList", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then(response => {
            return (response.json())

        }).then(json => {
            console.log("配信一覧の取得結果");
            console.log(json);
            this.streamingList = json;
            this.forceUpdate();
        })
    }

    sendViewPage(tmpID) {
        Actions.getStreamingID(tmpID);
        this.setState({ jump: "/view/" });
    }

    render() {
        if (this.state.jump) {
            return <Redirect to={this.state.jump} />
        }

        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            draggable: false,
            arrows: true,
            initialSlide: 0,
            zIndex: 2,
            responsive: [
                {
                    breakpoint: 2190,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 7,
                    }
                },
                {
                    breakpoint: 1960,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                    }
                },
                {
                    breakpoint: 1730,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 1460,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
            ]
        };
        var channelList = [];
        for (var i in this.streamingList) {
            var test = 0
            channelList.push(
                <div class="top-item">
                    <input type="button" class="data-hold" value={test = this.streamingList[i].ID} onClick={e => this.sendViewPage(e.target.value)}></input>
                    <GetImage image={this.streamingList[i].picture} />
                    <div class="top-text">
                        <p class="streaming-text">{this.streamingList[i].name}</p>
                        <p class="genre-text">{this.streamingList[i].category}</p>
                    </div>
                </div>
            );
        }

        return (
            <div class="top-items">
                <Slider {...settings}>
                    {channelList}
                </Slider>
            </div>
        );
    }
}