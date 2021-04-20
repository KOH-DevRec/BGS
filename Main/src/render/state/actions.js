import { dispatcher } from './dispatcher.js'

// 今回利用するActionを準備
export const ActionType = {
    INPUT_USER_ID: "INPUT_USER_ID",
    CHANGE_USER_STATUS: "CHANGE_USER_STATUS",
    GET_MY_STREAMING_ID: "GET_MY_STREAMING_ID",
    GET_PEER_ID: "GET_PEER_ID",
    CHANGE_PAGE: "CHANGE_PAGE",
}

// Actionの生成 ... Dispatcherに情報を投げる
export const Actions = {
    // ユーザIDの保持
    inputUserID: (userID) => {
        if (userID === null || userID == " " || userID == "　") {
            return;
        }
        dispatcher.dispatch({
            actionType: ActionType.INPUT_USER_ID,
            value: userID
        })
    },

    // 視聴者or配信者のどちらとしてログインしているか
    changeUserStatus: (userStatus) => {
        if (userStatus === null || userStatus == " " || userStatus == "　") {
            return;
        }
        dispatcher.dispatch({
            actionType: ActionType.CHANGE_USER_STATUS,
            value: userStatus
        })
    },

    // 自身の配信IDの取得
    getStreamingID: (streaming) => {
        dispatcher.dispatch({
            actionType: ActionType.GET_MY_STREAMING_ID,
            value: streaming
        })
    },

    // peerIDの取得
    getPeerID: (peerID) => {
        dispatcher.dispatch({
            actionType: ActionType.GET_PEER_ID,
            value: peerID
        })
    },

    // 現在のページを取得
    changePage: (nowPage) => {
        dispatcher.dispatch({
            actionType: ActionType.CHANGE_PAGE,
            value: nowPage
        })
    },
}