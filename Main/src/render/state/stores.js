import { dispatcher } from './dispatcher.js'
import { ActionType } from './actions.js'

// 今回利用するStoreを用意
export const StateStore = {
    userID: localStorage.getItem("userID"),
    userStatus: localStorage.getItem("userStatus"),
    streaming: localStorage.getItem("streaming"),
    nowPage: localStorage.getItem("nowPage"),
    peerID: localStorage.getItem("peerID"),
};

// ユーザIDの保持
dispatcher.register(payload => {
    if (payload.actionType === ActionType.INPUT_USER_ID) {
        StateStore.userID = payload.value;
        localStorage.setItem('userID', StateStore.userID);
    }
});

// 視聴者or配信者のどちらとしてログインしているか
dispatcher.register(payload => {
    if (payload.actionType === ActionType.CHANGE_USER_STATUS) {
        StateStore.userStatus = payload.value;
        localStorage.setItem('userStatus', StateStore.userStatus);
    }
});

// 自身の配信IDの取得
dispatcher.register(payload => {
    if (payload.actionType === ActionType.GET_MY_STREAMING_ID) {
        StateStore.streaming = payload.value;
        localStorage.setItem('streaming', StateStore.streaming);
    }
});

// peerIDの取得
dispatcher.register(payload => {
    if (payload.actionType === ActionType.GET_PEER_ID) {
        StateStore.peerID = payload.value;
        localStorage.setItem('peerID', StateStore.peerID);
    }
});

// 現在のページを取得
dispatcher.register(payload => {
    if (payload.actionType === ActionType.CHANGE_PAGE) {
        StateStore.nowPage = payload.value;
        localStorage.setItem('nowPage', StateStore.nowPage);
    }
});