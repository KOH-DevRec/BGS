// ライブラリーのインポート
import React from "react";
import { useState, useRef } from 'react'
import Peer from 'skyway-js'
const peer = new Peer({ key: "7b8f7e3a-4161-47e8-9fe0-ab98106e3aca" })

// CSSのインポート
import './view.css';

const GetStreaming = () => {

    const [myId, setMyId] = useState('');
    const [callId, setCallId] = useState('');
    const localVideo = useRef(null);
    const remoteVideo = useRef(null);

    // ①自身のpeerIDの取得
    // const sendMyID = async () => {
    peer.on('open', () => {
        setMyId(peer.id);
        console.log(peer.id);
        await navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(localStream => {
            localVideo.current.srcObject = localStream;
        })
        // return Promise.resolve(peer.id);
    })

    // const setID = async (a, b) => {
    //     setMyId(a);
    //     setCallId(b);

    //     return Promise.resolve(true);
    // }

    const setID = async (b) => {
        // setMyId(a);
        setCallId(b);

        return Promise.resolve(true);
    }

    const getID = async () => {
        let connect = await setID(await getOnAirID());
        // let connect = await setID(await sendMyID(), await getOnAirID());
        // if (connect == true){
        //     makeCall();
        // }
    }

    getID();

    // ②りもーねのpeerIDを取得
    const getOnAirID = async () => {
        let result = "";

        var data = {
            streamingName: "滝沢市IPUイノベーションセンター"
        };
        await fetch("https://bgs.sstn.jp/api/OnAir", {
            // await fetch("http://localhost:3000/api/OnAir", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then(response => {
            return (response.json())

        }).then(json => {
            console.log("配信ID(Skyway)の取得結果");
            result = json[0].streamingID;
        })
        return result;
    }

    // ③配信中の相手に接続
    const makeCall = () => {
        console.log(callId);
        const mediaConnection = peer.call(callId, localVideo.current.srcObject)
        mediaConnection.on('stream', async stream => {
            remoteVideo.current.srcObject = stream
            await remoteVideo.current.play().catch(console.error)
        })
    }

    return (
        <div>
            {/* 配信者の映像 */}
            <video id="streamer-video" autoPlay muted playsInline ref={remoteVideo}></video>
            {/* 視聴者の映像(表示はされない) */}
            <div><video width="50px" playsInline ref={localVideo}></video></div>
            <button id="demo" onClick={makeCall}></button>
        </div>
    );
}

export default GetStreaming
