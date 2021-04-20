// ライブラリーのインポート
import React from "react";
import { Link } from "react-router-dom";
import { For } from 'react-loops';

// CSSのインポート
import './top.css';

// 画像のインポート
import ImageL from './image/image1_lemone.png';
import Image1 from './image/image2_pantec.jpg';
import Image2 from './image/image3_michinoku.jpg';
import Image3 from './image/restaurant3.jpg';
import Image4 from './image/restaurant4.jpg';
import Image5 from './image/restaurant5.jpg';
import Image6 from './image/restaurant6.jpg';
import Image7 from './image/hotel1.jpg';
import Image8 from './image/hotel2.jpg';
import Image9 from './image/hotel3.jpg';
import Image10 from './image/hotel4.jpg';
import Image11 from './image/hotel5.jpg';
import Image12 from './image/hotel6.jpg';

// サムネイルの取得
export default class GetList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.image == "lemone") {
            return (
                <img src={ImageL} alt="main" className="streaming-image" />
            );
        } else if (this.props.image == "restaurant1") {
            return (
                <img src={Image1} alt="main" className="streaming-image" />
            );
        } else if (this.props.image == "restaurant2") {
            return (
                <img src={Image2} alt="main" className="streaming-image" />
            );
        } else if (this.props.image == "restaurant3") {
            return (
                <img src={Image3} alt="main" className="streaming-image" />
            );
        } else if (this.props.image == "restaurant4") {
            return (
                <img src={Image4} alt="main" className="streaming-image" />
            );
        } else if (this.props.image == "restaurant5") {
            return (
                <img src={Image5} alt="main" className="streaming-image" />
            );
        } else if (this.props.image == "restaurant6") {
            return (
                <img src={Image6} alt="main" className="streaming-image" />
            );
        } else if (this.props.image == "hotel1") {
            return (
                <img src={Image7} alt="main" className="streaming-image" />
            );
        } else if (this.props.image == "hotel2") {
            return (
                <img src={Image8} alt="main" className="streaming-image" />
            );
        } else if (this.props.image == "hotel3") {
            return (
                <img src={Image9} alt="main" className="streaming-image" />
            );
        } else if (this.props.image == "hotel4") {
            return (
                <img src={Image10} alt="main" className="streaming-image" />
            );
        } else if (this.props.image == "hotel5") {
            return (
                <img src={Image11} alt="main" className="streaming-image" />
            );
        } else if (this.props.image == "hotel6") {
            return (
                <img src={Image12} alt="main" className="streaming-image" />
            );
        } else {
            return (
                <div class="top-image"></div>
            );
        }
    }
}