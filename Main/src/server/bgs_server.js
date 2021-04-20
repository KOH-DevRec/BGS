const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 3000;
const io = require('socket.io')(server);

const log4js = require('log4js')
const logger = log4js.getLogger();

const DbManager = require('./db/db-manager.js');
const db = new DbManager();

// Body-Parserの利用許可
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// サーバの起動
server.listen(port, () => {
    console.log('bgs app running !! URL : ', 'http://localhost:' + port);
})

// ログイン画面に自動転送
app.use('/top', express.static('./public'));

app.get('/', (req, res) => {
    res.redirect(302, '/top')
})

// ページ遷移設定
app.use('/top', express.static('./public'));
app.use('/login', express.static("./public"));
app.use('/view', express.static("./public"));
app.use('/program', express.static('./public'));
app.use('/mypage', express.static('./public'));
app.use('/streaming', express.static('./public'));

app.post('/api/login', (req, res) => {
    db.isLogin(req.body.email, req.body.password)
        .then(result => {
            res.json(result);
        })
});

app.post('/api/getChannelID', (req, res) => {
    db.getChannelID(req.body.ID)
        .then(result => {
            res.json(result);
        })
})

// チャンネル一覧の取得(#飲食店)
// /api/〇〇の部分をdb-manager.jsと対応させる
app.post('/api/ShowChannelList', (req, res) => {
    logger.info("サーバに到達");
    // req.body.〇〇が呼び出した際(Top.jsなどで)の「var data = {〇〇=△△}」と対応
    try {
        db.showChannelList(req.body.count, req.body.category)
            .then(result => {
                // db-manager.jsでreturnした形の結果が帰ってくる
                logger.info(result);
                res.json(result);
            })
    } catch (err) {
        logger.info(err);
    }
})

app.post('/api/ShowDetail', (req, res) => {
    db.showDetail(req.body.ID)
        .then(result => {
            res.json(result);
        })
})

app.post('/api/OnAir', (req, res) => {
    db.getOnAir(req.body.streamingName)
        .then(result => {
            res.json(result);
        })
})

app.post('/api/setOnAir', (req, res) => {
    db.setOnAir(req.body.streamingName, req.body.streamingID)
        .then(result => {
            res.json(result);
        })
})