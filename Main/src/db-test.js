const { resolvePlugin } = require('@babel/core');
const DbManager = require('./server/db/db-manager.js');
const db = new DbManager();

// チャンネル一覧の取得(#飲食店の場合)のテスト用
// db.showChannelList(2, "%#旅館%-#ホテル%")
//     .then(result => {
//         console.log(result)
//         return
//     })

// db.showChannelList(1, "%#旅館%")
//     .then(result => {
//         console.log(result)
//         return
//     })

// db.showDetail(1)
//     .then(result => {
//         console.log(result)
//         return
//     })

// db.isLogin("test-address2@gmail.com", "password")
//     .then(result => {
//         console.log(result)
//         return
//     })

// db.getChannelID(2)
//     .then(result => {
//         console.log(result)
//         return
//     })

db.setOnAir("りもーね", "testtest")
    .then(result => {
        console.log(result)
        return
    })

// npm run db-testで実行可能
