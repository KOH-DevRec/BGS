// ライブラリーのインポート
import React from "react";
import Webcam from 'react-webcam';

// コンポーネントのインポート
import { StateStore } from '../../state/stores.js'
import { Actions } from '../../state/actions.js';


// 配信の詳細の表示
export default class StreamingSample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let localStream;
        let Pids;

        // cameraSize
        const videoConstraints = {
            width: 1280,
            height:720,
          };
          // 使用メディアの指定
          const capture = {
              facingMode: {
                  exact: "environment"
              }
          };
        
        localStream = capture;

        //Peer作成
        const peer = new Peer({
            key: '86a58484-5795-4b9b-beda-733a329e0b3e',
            debug: 3
        });
        
        peer.on('open', () => {
          document.getElementById('my-id').textContent = "PeerID:" + peer.id;
        });
    

        return (
            <div id="streaming-sample">
                <p id="my-id" class="example1"></p>
                <div id="videoPreview">
                    <Webcam
                    audio={false}
                    videoConstraints={videoConstraints}
                    video={capture} />
                </div>
            </div>
        );
    }
}