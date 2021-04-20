// ライブラリーのインポート
import React from "react";
import { useState, useRef } from 'react'
import Peer from 'skyway-js'
const peer = new Peer({ key: "7b8f7e3a-4161-47e8-9fe0-ab98106e3aca" })

// CSSのインポート
import './menu.css';

const GetMyStreaming = () => {

    const [myId, setMyId] = useState('')
    let [nowStreaming, switchState] = useState('配信開始')
    const localVideo = useRef(null)
    const remoteVideo = useRef(null)

    const setOnAirID = (tmpID) => {
        console.log("配信ID(Skyway)の更新");
    
        var data = {
            streamingName: "滝沢市IPUイノベーションセンター",
            streamingID: tmpID
        };
    
        fetch("https://bgs.sstn.jp/api/setOnAir", {
        // fetch("http://localhost:3000/api/setOnAir", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
    
        }).then(response => {
            return (response.json())
    
        }).then(json => {
            console.log("配信ID(Skyway)のの更新結果");
            console.log(json);
        })
    }

    const switchStreaming = () => {
        if (nowStreaming == "配信開始") {
            switchState("配信停止");
            setOnAirID(myId);
        } else {
            switchState("配信開始");
        }
    }

    peer.on('open', () => {
        setMyId(peer.id)
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(localStream => {
            localVideo.current.srcObject = localStream;
        })
    })

    peer.on('call', mediaConnection => {
        mediaConnection.answer(localVideo.current.srcObject);

        mediaConnection.on('stream', async stream => {
            remoteVideo.current.srcObject = stream
        })
    })

    return (
        <div>
            <video id="my-video" autoPlay muted playsInline ref={localVideo}></video>
            <button type="button" id="streaming-button" onClick={switchStreaming}>{nowStreaming}</button>
            <div><video width="100px" playsInline ref={remoteVideo}></video></div>
        </div>
    );
}

export default GetMyStreaming